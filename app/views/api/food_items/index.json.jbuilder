# category_by_ids = Hash.new{|h, k| h[k] = Array.new(0)}

@food_items.each do |food_item|
  # category_by_ids[food_item.price].push(food_item.id) # CHANGE TO CATEGORY
  json.set! food_item.id do
    json.partial! 'food_item', food_item: food_item
  end
end  
# json.set! 'categories', category_by_ids