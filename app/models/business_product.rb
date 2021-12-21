class BusinessProduct < ApplicationRecord
  belongs_to :business
  belongs_to :product


  # def add_product
  #     { 
  #       id:self.id,
  #       name: self.name,
  #       price: self.price,
  #       business: self.product.map do |p|{ 
  #         id: p.id,
  #         name: p.name
  #        }
  #       end
  #       product: self.product.map do |b|{ 
  #         id: b.id,
  #         description: b.description,
  #         stock: b.stock,
  #         rating: b.rating,

  #       }
  #       end
  #      }
  # end
end
