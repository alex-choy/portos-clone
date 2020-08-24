# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# {name: '', quantity: , price: , description: "", image_url: ""}

# {name: 'scorpion juice', quantity: 25, price: 999.99, description: "that's gotta sting", image_url: "fasd.png"}

# demo_user = User.create(username: "Andy", password: "password")

# file = open('https://porosnax-dev.s3-us-west-1.amazonaws.com/american-heritage-chocolate-HuzdnhOfTKs-unsplash.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')


# Categories
cookie = Category.create(name: 'cookie')
baked_good = Category.create(name: 'baked_good')
pastry = Category.create(name: 'pastry')
bread = Category.create(name: 'bread')
cake = Category.create(name: 'cake')


food_items = [
  {name: 'Shortbread Cookies', quantity: 120, price: 5.50, category_id: cookie.id,
    description: "Shortbread cookies pressed together with dark chocolate", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/tanaphong-toochinda-_f8S_o9xQK8-unsplash.jpg"},
  {name: 'Chocolate Cookies', quantity: 150, price: 4.00, category_id: cookie.id,
    description: "Chocolate cookies with chopped peanuts", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/american-heritage-chocolate-DoK5qEy2L60-unsplash.jpg"},
  {name: 'Raspberry Tart', quantity: 80, price: 4.50, category_id: baked_good.id,
    description: "Pie crust filled with cream, topped with raspberries, dusted with powdered sugar", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/louis-mornaud-bLbRF0XWHJs-unsplash.jpg"},
  {name: 'Vanilla Bean Cheesecake', quantity: 40, price: 6.00, category_id: cake.id,
    description: "Vanilla cheesecake, graham cracker crust, dried apricot layer on the bottom, mango jam spread on top", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/alana-harris-sSLi0wraDmQ-unsplash.jpg"},
  {name: 'Lemon Cupcake', quantity: 0 , price: 2.25, category_id: baked_good.id,
    description: "Lemon-flavored mini cupcakes, topped with buttercream", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/chaman-raj-JbeYtG0HizE-unsplash.jpg"},
  {name: 'Black Sesame Honey Bread', quantity: 0 , price: 5.00, category_id: bread.id,
    description: "Soft, fluffy bread sweetened with honey, sprinked with black sesame seeds and extra honey", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/abraham-cisneros-0xxCRrgFrXk-unsplash.jpg"}
]
# Food Items
food_items.each do |food_info|
  file = open(food_info[:image_url])
  new_item = FoodItem.create(food_info)
  new_item.photo.attach(io: file, filename: food_info[:image_url])
end

# Demo User 
User.create(username: 'GuestUser', password: 'GuestUser');