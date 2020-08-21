@categories.each do |category|
  json.set! category.name do
    json.array! category.food_item_ids
  end
end
