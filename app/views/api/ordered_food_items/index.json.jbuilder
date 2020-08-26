@ordered_food_items.each do |ordered_food_item|
  json.set! ordered_food_item.id do 
    json.extract! ordered_food_item, :order_id, :food_item_id, :quantity
  end
end