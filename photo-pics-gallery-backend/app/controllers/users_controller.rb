class UsersController < ApplicationController
  def create
    def create
      user = User.create(username: params[:username])
      render json: user
    end
  end
end
