class BusinessesController < ApplicationController
    def index
        business = Business.all
        render json: business, status: :ok
    end
    def show
        business = Business.find(params[:id])
        if business
           render json: business
        else
            render json: {error: "No such business"}, status: :not_found
        end
    end

    def create
        business = Business.create(description: params[:description], stock: params[:stock], rating: params[:rating])
        if Business.valid?
            render json: business, status: :created  
        else
            render json: business.errors, status: :unprocessable_entity
        end
    end
end
