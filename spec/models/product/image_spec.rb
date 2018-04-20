# == Schema Information
#
# Table name: product_images
#
#  id                :integer          not null, primary key
#  image             :string
#  use_case          :integer          default("normal")
#  original_filename :string
#  product_id        :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'rails_helper'

RSpec.describe Product::Image, type: :model do
  it { should belong_to :product }
end