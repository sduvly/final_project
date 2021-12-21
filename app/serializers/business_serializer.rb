class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :business_name
  has_one :user
end
