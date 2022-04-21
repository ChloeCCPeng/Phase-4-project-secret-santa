class SessionsController < ApplicationController
    

    #authenticating user's username and password 
    def create
        user = User.find_by(username: params[:username])
        #saving the user Id in  the session hash 
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # returning a JSON of the user's info
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end


    
    def destroy
        #if the user is logged in 
        if session.include? :user_id
            # removing the user's id from the sessions hash 
            session.delete :user_id
            head :no_content
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    
    




end
