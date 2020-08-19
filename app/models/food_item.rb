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
#
class FoodItem < ApplicationRecord
  validates :name, :quantity, :price, :description, :image_url, presence: true
  validates :name, :image_url, uniqueness: true
end
