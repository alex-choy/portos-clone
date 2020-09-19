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
sweet_treat = Category.create(name: 'sweet_treat')


food_items = [
  {name: 'Shortbread Cookies', quantity: 120, price: 5.50, category_id: cookie.id,
    description: "Shortbread cookies pressed together with dark chocolate", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/tanaphong-toochinda-_f8S_o9xQK8-unsplash.jpg"},
  {name: 'Chocolate Cookies', quantity: 0, price: 4.00, category_id: cookie.id,
    description: "Chocolate cookies with chopped peanuts", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/american-heritage-chocolate-DoK5qEy2L60-unsplash.jpg"},
  {name: 'Raspberry Tart', quantity: 80, price: 4.50, category_id: baked_good.id,
    description: "Pie crust filled with cream, topped with raspberries, dusted with powdered sugar", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/louis-mornaud-bLbRF0XWHJs-unsplash.jpg"},
  {name: 'Vanilla Bean Cheesecake', quantity: 40, price: 6.00, category_id: cake.id,
    description: "Vanilla cheesecake, graham cracker crust, dried apricot layer on the bottom, mango jam spread on top", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/alana-harris-sSLi0wraDmQ-unsplash.jpg"},
  {name: 'Lemon Cupcake', quantity: 200 , price: 2.25, category_id: baked_good.id,
    description: "Lemon-flavored mini cupcakes, topped with buttercream", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/chaman-raj-JbeYtG0HizE-unsplash.jpg"},
  {name: 'Black Sesame Honey Bread', quantity: 0 , price: 5.00, category_id: bread.id,
    description: "Soft, fluffy bread sweetened with honey, sprinked with black sesame seeds and extra honey", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/abraham-cisneros-0xxCRrgFrXk-unsplash.jpg"},

  {name: 'Artisan Sourdough Bread', quantity: 100 , price: 7.50, category_id: bread.id,
    description: "Freshly-baked sourdoug bread, a hearty thick crust with a soft, chewy sponge. Perfect toasted with some butter", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/stephen-walker-_-SwhhV7tSo-unsplash.jpg"},
  {name: 'Sugar Donuts', quantity: 200 , price: 2.00, category_id: sweet_treat.id, 
    description: "Rounded donuts, filled with raspberry jam and tossed in sugar", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/seashell-in-love-kristin-NKIXkOXk-_A-unsplash.jpg"},
  {name: 'Pain au Chocolat', quantity: 100 , price: 5.75, category_id: pastry.id, 
    description: "Crisp on the outside, fluffy on the inside croissants with a piece of chocolate in the center", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/mink-mingle-qZ5lPCPvdXE-unsplash.jpg"},
  {name: 'Burnt Cheesecake', quantity: 80 , price: 4.25, category_id: cake.id, 
    description: "Baked cheesecake with a slightly charred top to counter-balance the richness of the center", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/chaman-raj-xH0TWBxGVZM-unsplash.jpg"},
  {name: 'Sticky Cinnamon Rolls', quantity: 30 , price: 3.50, category_id: pastry.id, 
    description: "Cinnamon rolls baked in-house every day, with a sweet inner-sugar and cinnamon filling, drizzled with frosting", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/sergio-arze-wp3yOyh0xB4-unsplash.jpg"},
  {name: 'Mooncake w/ Egg Yolk', quantity: 50 , price: 9.00, category_id: baked_good.id, 
    description: "Perfect for the Autumn Festival, lotus bean filling with mixed nuts and a duck egg yolk, baked and cooled", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/foto-t-N53gS2c6LtE-unsplash.jpg"},
  {name: 'Twisted Krispy Sesame Roll', quantity: 400 , price: 2.75, category_id: baked_good.id, 
    description: "A twisted, baked bread, topped with a rice cereal, with a sesame-seed flavor", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/oskar-yildiz-9B9-Wq1cZMI-unsplash.jpg"},

  {name: 'Chocolate Gingerbread Cookies', quantity: 400 , price: 1.50, category_id: cookie.id, 
    description: "Chocolate holiday-season cookies, frosted with decoration and baked to a thin, crisp texture", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/american-heritage-chocolate-1VNS4aeOmJc-unsplash.jpg"},
  {name: 'Chocolate-Dipped Cereal Treat', quantity: 300 , price: 1.25, category_id: sweet_treat.id, 
    description: "Cereal treats dipped in cocolate, sprinked with colorful, edible mini beads", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/american-heritage-chocolate-uHHC3xS9u3o-unsplash.jpg"},
  {name: 'Coconut Almond Cheeseake', quantity: 400 , price: 10.50, category_id: cake.id, 
    description: "Coconut flavored cheesecake with a graham cracker crust, topped with coconut shavings and candied, sliced almonds", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/ana-tavares-NyQwVPacW00-unsplash.jpg"},
  {name: 'Twisted Cinnamon Donut', quantity: 500 , price: 2.50, category_id: sweet_treat.id, 
    description: "Spiral-shaped donuts that you can peel and twist like a coil! Tossed with sugar and cinnamon", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/basile-bedelek-wMPmhf3qShg-unsplash.jpg"},
  {name: 'Fudge Peanut Butter Brownies', quantity: 400 , price: 2.00, category_id: baked_good.id, 
    description: "Dense, chocolate-y brownies, swirled with fudge and peanut butter", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/chaman-raj-0lmVsDyqpVI-unsplash.jpg"},
    
  {name: 'Peanut Butter Chocolate Chip Oatmeal Cookies', quantity: 400 , price: 1.00, category_id: cookie.id, 
    description: "Thin-n-crispy oatmeal cookies, mixed with peanut butter and topped chocolate chips", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/corleto-peanut-butter-HIXCrSevIKQ-unsplash.jpg"},
  {name: 'Country Loaf', quantity: 400 , price: 6.00, category_id: bread.id, 
    description: "Soft and chewy center with a thick crust, great with jams or grilled cheese sandwiches", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/ddp-QnQSxrXFgnw-unsplash.jpg"},
  {name: 'Molten Choco Cupcakes', quantity: 400 , price: 1.25, category_id: baked_good.id, 
    description: "Chocolate cupcakes with a molten center, bake for 5 minutes before serving!", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/fernanda-tadini-agqjcUO7brc-unsplash.jpg"},
  {name: 'Vanilla Birthday Cupcake', quantity: 0 , price: 1.75, category_id: baked_good.id, 
    description: "Light vanilla cupcakes with sprinkles everywhere, topped with vanilla buttercream", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/nickie-joseph-T6oD9CIlpGA-unsplash.jpg"},
  {name: 'Whole Blueberry Tart', quantity: 400, price: 20.00, category_id: pastry.id, 
    description: "12\" tart, made with a shortbread crust, blueberry cream filling, topped with fresh blueberries", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/raphael-maksian-vPedCtyqArw-unsplash.jpg"},
  {name: 'Chocolate Ice Cream Cake', quantity: 400 , price: 25.00, category_id: cake.id, 
    description: "Chocolate cake, layered with chocolate ganache, topped with 3 pounds of fresh whipping cream, drizzled with chocolate sauce", 
    image_url: "https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/sj-baren-diUixdrqh0Q-unsplash.jpg"}
]
# Food Items
food_items.each do |food_info|
  file = open("#{food_info[:image_url]}")
  new_item = FoodItem.create(food_info)
  new_item.photo.attach(io: file, filename: food_info[:image_url])
end

# Demo User 
User.create(username: 'GuestUser', password: 'GuestUser');

# Order
order1 = Order.create(buyer_id: 1, notes: "don't burn it please thanks", pickup_time: "Aug 25 at 10:00pm")

# OrderedFoodItems
ofi1 = OrderedFoodItem.create(order_id: order1.id, food_item_id: 2, quantity: 20)
ofi2 = OrderedFoodItem.create(order_id: order1.id, food_item_id: 4, quantity: 40)
ofi3 = OrderedFoodItem.create(order_id: order1.id, food_item_id: 5, quantity: 50)
ofi4 = OrderedFoodItem.create(order_id: order1.id, food_item_id: 5, quantity: 50)