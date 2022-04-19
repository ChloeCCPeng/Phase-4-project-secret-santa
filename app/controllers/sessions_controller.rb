class SessionsController < ApplicationController
    skip_before_action :authroized, only: [:create] 


    #looks up user in databse, verify login credentials, then store the authenticared user's id in the session
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created 
            else
            render json: { error: {login: "Invalid username or passowrd"}}, status: :unauthorized
        end
    end

    def destroy
        sessoin.delete :user_id
        head :no_content
    end

    
    




end
