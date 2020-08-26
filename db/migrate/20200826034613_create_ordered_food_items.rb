class CreateOrderedFoodItems < ActiveRecord::Migration[5.2]
  def change
    create_table :ordered_food_items do |t|
      t.integer :order_id, presence: true
      t.integer :food_item_id, presence: true
      t.integer :quantity, presence: true

      t.timestamps
    end

    add_index :ordered_food_items, [:order_id, :food_item_id], unique: true
  end
end
