class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :stock, :rating
end
