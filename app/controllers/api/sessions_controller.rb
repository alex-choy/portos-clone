class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      redirect_to api_user_url(user)
    else
      render json: ["Invalid username and/or password combination, please try again"]
    end
  end

  def destroy
    logout!
    
  end
end
