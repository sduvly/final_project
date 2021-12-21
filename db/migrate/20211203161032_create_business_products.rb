class CreateBusinessProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :business_products do |t|
      t.string :name
      t.integer :price
      t.belongs_to :business, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
