class UpdateOrderedFoodItems < ActiveRecord::Migration[5.2]
  def change
    change_column_null :ordered_food_items, :order_id, false
    change_column_null :ordered_food_items, :food_item_id, false
    change_column_null :ordered_food_items, :quantity, false
  end
end
