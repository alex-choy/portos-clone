class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login!(user)
      redirect_to api_user_url(user)
    else
      render json: ["Invalid username and/or password combination, please try again"], status: 404
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["No user to logout"], status: 404
    end
  end
end
