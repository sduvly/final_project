class User < ApplicationRecord
    has_many :businesses
    has_many :business_products, through: :businesses
    
    
    has_secure_password

    has_many :purchases
    has_many :business_pro,  through: :purchases, source: :business_products
    
    validates :username, length: {minimum: 5}, presence: true, uniqueness: :true
    validates :password_digest, length: {minimum:6}
    validates :email, presence: true, uniqueness: :true
end
