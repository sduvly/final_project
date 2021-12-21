class ProductsController < ApplicationController
    def index
        product = Product.all
        render json: product, status: :ok
    end
    def show
        products = Product.find(params[:id])
        if products
           render json: products
        else
            render json: {error: "No such product"}, status: :not_found
        end
    end

    def create
        products = Product.create(description: params[:description], stock: params[:stock], rating: params[:rating])
        if products.valid?
            render json: products, status: :created  
        else
            render json: products.errors, status: :unprocessable_entity
        end
    end

end
