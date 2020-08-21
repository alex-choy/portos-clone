# == Schema Information
#
# Table name: food_items
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  quantity    :integer          not null
#  price       :decimal(5, 2)
#  description :text             not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#
require 'test_helper'

class FoodItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
