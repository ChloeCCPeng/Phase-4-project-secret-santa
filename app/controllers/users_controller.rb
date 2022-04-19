class UsersController < ApplicationController
    #getting the users data from the backend into state when the page first loads 
    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  end