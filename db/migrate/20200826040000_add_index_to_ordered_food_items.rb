class AddIndexToOrderedFoodItems < ActiveRecord::Migration[5.2]
  def change
    add_index :ordered_food_items, :order_id
    add_index :ordered_food_items, :food_item_id
  end
end
