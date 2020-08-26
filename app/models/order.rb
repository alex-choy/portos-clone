# == Schema Information
#
# Table name: orders
#
#  id          :bigint           not null, primary key
#  buyer_id    :integer          not null
#  notes       :text
#  pickup_time :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Order < ApplicationRecord
  validates :buyer_id, :pickup_time, presence: true


  belongs_to :buyer,
    foreign_key: :buyer_id, 
    class_name: :User

  has_many :ordered_food_items,
    foreign_key: :order_id,
    class_name: :OrderedFoodItem

  has_many :food_items,
    through: :ordered_food_items,
    source: :food_item
end
