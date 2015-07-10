class UsersController < ApplicationController
  def email_validate
    isValid = User.exists?(email: params[:email])    
    render json: {"isValid" => isValid}    
  end
end
