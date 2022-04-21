Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  #creating login flow    

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :users, only: [:show, :create]
  resources :wishlists, only: [:index, :update, :destroy]
  resources :events, only: [:index, :create, :show]
end