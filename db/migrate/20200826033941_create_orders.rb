class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :buyer_id, null: false, index: true
      t.text :notes
      t.string :pickup_time, null: false
      t.timestamps
    end
  end
end
