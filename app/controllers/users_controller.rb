class UsersController < ApplicationController
    #getting the users data from the backend into state when the page first loads 
    # skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


    #GET '/user/:id'
    def show
      user = User.find(params[:id])
      render json: user
    end

    #POST creating new user 
    def create 
      user = User.create!(user_params)
      render json: user, status: :created
    end

    private 


    def render_unprocessable_entity(invalid)
      render json: {error: invlaid.record.errors}, status: :unprocessable_entity
    end

    #may need to add a confirm password param in 
    def user_params 
      params.permit(:first_name, :last_name, :username, :phone_number, :email, :password) 
    end


    #strong param to authorize certain users to acess the page 
    def authorized
      return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end



  end
  