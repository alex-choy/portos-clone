# == Schema Information
#
# Table name: ordered_food_items
#
#  id           :bigint           not null, primary key
#  order_id     :integer          not null
#  food_item_id :integer          not null
#  quantity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class OrderedFoodItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
