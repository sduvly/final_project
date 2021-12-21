class BusinessProductsController < ApplicationController

    def index
        business_products = BusinessProduct.all
        render json: business_products, status: :ok
    end
    def show
        business_products = BusinessProduct.find(params[:id])
        if business_products
           render json: business_products
        else
            render json: {error: "No such business product"}, status: :not_found
        end
    end

    def create
        bP = BusinessProduct.create(name: params[:name], price: params[:price], image: params[:image])
        if bp.valid?
            render json: bP, status: :created  
        else
            render json: bP.errors, status: :unprocessable_entity
        end
    end

end
