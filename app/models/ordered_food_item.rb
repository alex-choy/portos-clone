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
class OrderedFoodItem < ApplicationRecord
  validates :order_id, :food_item_id, :quantity, presence: true
  validates :order_id, uniqueness: { scope: :food_item_id }
  
  belongs_to :order,
    foreign_key: :order_id,
    class_name: :Order,
    dependent: :destroy

  belongs_to :food_item,
    foreign_key: :food_item_id,
    class_name: :FoodItem
end
