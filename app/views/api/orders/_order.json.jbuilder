formatted_time = order.updated_at.strftime('%m/%d/%Y %H:%M%p %Z')
json.set! order.id do
  json.extract! order, :id, :notes, :pickup_time
  json.set! "updated_at", formatted_time
  json.orderedFoodItems order.ordered_food_items
end