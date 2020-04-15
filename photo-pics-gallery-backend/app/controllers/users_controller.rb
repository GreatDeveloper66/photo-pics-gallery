class UsersController < ApplicationController
    def create
      user = User.find_or_create_by(username: params[:username])
      render json: user
    end
    def index
      users = User.all
      render json:users
    end
    def show
      user = User.find_by(id: params[:id])
      render json:user
    end
    def edit
      user = User.find_by(id: params[:id])
      render json:user
    end
    def update
      User.update(user_params)
    end

    private
    def user_params
      params.require(:user).permit(:id,:username)
    end
end
