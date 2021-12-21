class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :description
      t.integer :stock
      t.string :rating

      t.timestamps
    end
  end
end
