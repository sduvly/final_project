class UsersController < ApplicationController

    def index 
       users = User.all
       render json: users, status: :ok
    end
    def show
        if current_user 
          render json:current_user, status: :ok
        else 
            render json: {error: "No active session found"}, status: :unauthorized
        end
    end
    def create
        user = User.save(user_params)
        if user.save 
             session[user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: user.errors}, status: :unprocessable_entity

        end
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
