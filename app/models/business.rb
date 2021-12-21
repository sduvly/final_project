class Business < ApplicationRecord
  belongs_to :user
  has_many :business_products
  has_many :products, through: :business_products
end
