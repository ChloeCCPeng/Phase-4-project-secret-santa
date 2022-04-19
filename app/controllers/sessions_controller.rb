class SessionsController < ApplicationController

    #looks up user in databse, verify login credentials, then store the authenticared user's id in the session
    def create 
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id 
        render json: user 
    end

    def destroy
        sessoin.delete :user_id
        head :no_content
    end

    
end
