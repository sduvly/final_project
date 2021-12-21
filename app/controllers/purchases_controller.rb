class PurchasesController < ApplicationController
    def index
        purchase = Purchase.all
        render json: purchase, status: :ok
    end

    def show
        purchase = Purchase.find(params[:id])
        
        if purchase
            render json: purchase, status: :ok
        else
            render json:{error: "Purchase doesnt exist"}, status: :unprocessable_entity
        end
    end

    def create
        purchases = Purchase.create(purchase_params)
        
        if purchases
            render json: purchases, status: :created
        else
            render json: {error: 'Item was not purchased'}, status: :not_found
        end
      
    end

    def update 
        purchase = Purchase.find(params[:id])


        if purchase.update(purchase: params[:purchase])
            render json: Purchase.all, status: :created
        else
            render json: {error: 'Item was not purchased'}, status: :not_found
        end
    end

    def destroy
        purchases = Purchase.find(params[:id])
        if purchases.destroy
        render json: Purchase.all
        else
        render json: {error: 'Item was delete'}
       end
    end

     private

     def purchase_params

        params.permit(:purchase, :user_id, :business_product_id)
     end

end
