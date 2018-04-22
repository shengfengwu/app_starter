# 嘗試先看看 request 的內容有沒有 cached 的資料，有的話使用 cache，沒有的話才 render json
class Api::DataCacheService
  attr_reader :collection, :request, :meta_options, :extra_options, :user_scope

  def initialize(collection, request, **options)
    @collection = collection
    @request = request

    @meta_options = options.fetch(:meta, {})
    @extra_options = options.fetch(:extra, {})
    @user_scope = options.fetch(:user_scope, nil)
  end

  def call
    Rails.cache.fetch(cache_key_with_user_scope) do
      show_indicator_in_development_log
      ActiveModelSerializers::SerializableResource.new(collection, structured_options).as_json
    end
  end

  # 使用 `Rails.cache.fetch`，先嘗試尋找 cache 並回傳 cached 的內容，若沒有才透過 `ActiveModelSerializers::SerializableResource#as_json` 來產生 API render 時需要的資料。
  #
  # 若是在 Development 環境下，會在 Log 顯示 `"DB HITTED"` 的標示，在開發時比較容易判斷是否有取得 cache
  #
  # @param [Object] collection ActiveRecord::Relation 物件或是單筆 model 的 instance。通常是使用 FetchingDataService 回傳的內容
  # @see FetchingDataService.call
  # @param [Object] request 從 controller 中得到的 request 物件
  # @param [Hash] options 可傳入要給 AMS 的額外 options。 options[:meta] 會加入 AMS 的 meta 中，而 options[:extra] 則是 AMS 的 include 內容與 instance_options。options[:user_scope] 可指定目前使用 API 的使用者，一般可使用 Model class name。
  #
  #
  # @example 要一併 render 出 Article 的 Comments，並在 meta 中加入 comment_count
  #   # API::V1::ArticlesController#index
  #   # ...
  #     result = Api::DataCacheService.call(@articles,
  #                                         request,
  #                                         meta: { article_count: Article.count },
  #                                         extra: { include: [:comments],
  #                                                  show_comments: true })
  #     render json: result
  #   # ...
  #
  # @example 要輸出 PostInfo，若有些個人隱私資料會依照 user 的不同而必須有差異時可透過 user scope 與不同的 serializer 來把資料區分開來
  #   # API::V1::PostsController#index
  #   # ...
  #     result = Api::DataCacheService.call(@articles,
  #                                         request,
  #                                         extra: extra_options,
  #                                         user_scope: current_api_user.class.name)
  #     render json: result
  #   # ...
  #   def extra_options
  #     return {} unless admin_signed_in?

  #     {
  #       each_serializer: EventPostSerializer::Detail,
  #       show_prize: true
  #     }
  #   end
  #   # ...
  #
  # @return [Hash] 會回傳 Cache 或直接透過 `ActiveModelSerializers::SerializableResource#as_json` 得到的內容
  def self.call(collection, request, **options)
    new(collection, request, options).call
  end

  # 讓 ApiController 可以直接使用這裡的 `pagination_dict` 方法
  #
  # @param [Object] collection ActiveRecord::Relation 物件或是單筆 model 的 instance。通常是使用 FetchingDataService 回傳的內容
  # @param [Object] request 從 controller 中得到的 request 物件
  #
  # @return [Hash]
  def self.pagination_dict(collection, request)
    new(collection, request).pagination_dict
  end

  def pagination_dict
    return {} if request.params[:page].blank?

    {
      current_page: collection.current_page,
      next_page: collection.next_page,
      prev_page: collection.prev_page, # use collection.previous_page when using will_paginate
      total_pages: collection.total_pages,
      total_count: collection.total_count
    }
  end

  private

  def cache_key_with_user_scope
    return collection.cache_key unless user_scope
    "#{user_scope}-#{collection.cache_key}"
  end

  def structured_options
    @options ||= {
      meta: pagination_dict.merge(meta_options),
      serialization_context: ActiveModelSerializers::SerializationContext.new(request)
    }.merge(extra_options)
  end

  def show_indicator_in_development_log
    Rails.logger.warn %(#{'='*25}\n DB HIT\n#{'='*25}) if Rails.env.development?
  end
end
