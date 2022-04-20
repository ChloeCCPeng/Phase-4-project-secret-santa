class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorized 

  # # private method necessary for error 
  # private

  # def authorized
  #   return render json: { error: "Not authorized" }, status: :authorized unless session.include? :user_id
  # end

end
