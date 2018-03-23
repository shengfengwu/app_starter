class Api::V1::Web::ProductCategoriesController < Api::V1::Web::BaseController
  def index
    @categories = ProductCategory.top_level_only

    render json: @categories,
           include: ['sub_categories', 'sub_categories.sub_categories']
  end

  def create
    form = Admin::ProductCategoryForm.new(ProductCategory.new)

    return raise ValidationFailureException, form unless form.validate(product_category_params)

    form.save

    render json: form.model
  end

  def update
    form = Admin::ProductCategoryForm.new(ProductCategory.find(params[:id]))

    return raise ValidationFailureException, form unless form.validate(product_category_params)

    form.save

    render json: form.model
  end

  private

  def product_category_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
