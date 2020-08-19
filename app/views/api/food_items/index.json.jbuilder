@food_items.each do |food_item|
  json.set! food_item.id do
    json.partial! 'food_item', food_item: food_item
  end
end