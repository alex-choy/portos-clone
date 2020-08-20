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
require 'open-uri'
class FoodItem < ApplicationRecord
  validates :name, :quantity, :price, :description, :image_url, presence: true
  validates :name, :image_url, uniqueness: true
  has_one_attached :photo
  after_initialize :test_set_photo

  def test_set_photo
    file = open('https://porosnax-dev.s3-us-west-1.amazonaws.com/american-heritage-chocolate-HuzdnhOfTKs-unsplash.jpg')

    self.photo.attach(io: file, filename: 'american-chocolate.jpg')
  end

end
