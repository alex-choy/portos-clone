# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# {name: '', quantity: , price: , description: "", image_url: ""}
guestUser =  User.create(username: 'DemoUser', password: 'DemoUser');

# {name: 'scorpion juice', quantity: 25, price: 999.99, description: "that's gotta sting", image_url: "fasd.png"}

# demo_user = User.create(username: "Andy", password: "password")

# file = open('https://porosnax-dev.s3-us-west-1.amazonaws.com/american-heritage-chocolate-HuzdnhOfTKs-unsplash.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')