class UsersController < ApplicationController
    #getting the users data from the backend into state when the page first loads 



    #GET '/user/:id'
    #finds a user in the database using the user id from the session hash and returns the user in a json 
    user = User.create!(create_user_params)
    session[:user_id] ||= user.id
    render json: user, status: :created
rescue ActiveRecord::RecordInvalid => invalid
    render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
end

    #finds user in the database using the user id from the session hash and returns the user as json


    #POST creating new user 
    def create
      user = User.create!(create_user_params)
      session[:user_id] ||= user.id
      render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => invalid
      render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
  end

    private 

    #may need to add a confirm password param in 
    def create_user_params 
      params.permit(:first_name, :last_name, :username, :phone_number, :email, :password) 
    end


    #strong param to authorize certain users to acess the page 
    def authorized
      return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end



  end
  