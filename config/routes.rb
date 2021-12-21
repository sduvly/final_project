Rails.application.routes.draw do
  
  resources :purchases, only: [:index, :show, :update, :destroy, :create]
  resources :business_products, only: [:index, :show, :update, :destroy]
  resources :products, only: [:index, :show, :update, :destroy]
  resources :businesses, only: [:index, :show, :update, :destroy]
  resources :users, only: [:index, :show, :update, :destroy]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
