class Product < ApplicationRecord
    has_many :business_products
    has_many :businesses, through: :business_products
end
