class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :business_product
end
