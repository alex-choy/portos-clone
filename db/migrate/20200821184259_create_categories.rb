class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false, unique: true
      t.timestamps
    end


    add_column :food_items, :category_id, :integer
    add_index :food_items, :category_id
  end
end
