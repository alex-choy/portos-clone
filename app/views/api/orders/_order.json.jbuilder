json.set! order.id do
  json.extract! order, :id, :notes, :pickup_time, :updated_at
  json.orderedFoodItems order.ordered_food_items
end