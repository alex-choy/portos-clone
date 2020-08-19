class CreateFoodItems < ActiveRecord::Migration[5.2]
  def change
    create_table :food_items do |t|
      t.string :name, null:false, unique: true, index: true
      t.integer :quantity, null:false
      t.decimal :price, precision: 5, scale: 2
      t.text :description, null:false
      t.string :image_url, null:false, unique: true

      t.timestamps
    end
  end
end
