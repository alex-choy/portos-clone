formatted_time = order.updated_at.in_time_zone("Pacific Time (US & Canada)").strftime('%m/%d/%Y %l:%M%p %Z')
json.set! order.id do
  json.extract! order, :id, :notes, :pickup_time
  json.set! "updated_at", formatted_time
  json.orderedFoodItems order.ordered_food_items
end