class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :purchase
  has_one :user
  has_one :business_product
end
