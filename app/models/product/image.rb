# == Schema Information
#
# Table name: product_images
#
#  id                :bigint(8)        not null, primary key
#  image             :string
#  use_case          :integer          default("normal")
#  original_filename :string
#  product_id        :bigint(8)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  is_cover          :boolean          default(FALSE)
#  variant_id        :bigint(8)
#

class Product::Image < ApplicationRecord
  belongs_to :product, optional: true, touch: true
  belongs_to :variant, class_name: 'Product::Variant', optional: true, touch: true

  enum use_case: %i(normal description)

  mount_uploader :image, ProductImageUploader

  scope :cover, -> { where(is_cover: true).take }

  def set_as_cover
    ActiveRecord::Base.transaction do
      product.normal_images.cover.update is_cover: false
      update is_cover: true
    end
  end
end
