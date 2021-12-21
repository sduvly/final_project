class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.boolean :purchase
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :business_product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
