class AddImageToBusinessProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :business_products, :image, :string
  end
end
