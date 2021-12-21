class BusinessProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image
  has_one :business
  has_one :product
end
