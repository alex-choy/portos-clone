json.extract! food_item, :id, :name, :quantity, :price, :description, :category_id
json.photo_url polymorphic_url(food_item.photo.variant(resize: "500x500"))