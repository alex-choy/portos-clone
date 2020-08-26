json.partial! 'order', order: @order

# json.set! "food_item_ids" do 
  # json.array! @order.ordered_food_items
  # json.array! @order.ordered_food_items.each do |ordered_food_item|
  #   p 'TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST '
  #   p ordered_food_item.food_item_id
  #   json.extract! ordered_food_item.food_item_id
  # end
# end