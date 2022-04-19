Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  #creating login flow    
  post "/login", to: "sessions#create"
  #log out flow 
  delete "/logout", to: "sessions#destroy"
  #retriving the users data from the database 
  get "/me", to: "users#show"

  resources :user


end
