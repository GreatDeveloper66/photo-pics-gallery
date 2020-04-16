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
      user = User.update(user_params)
      render json:user
    end

    def destroy
      User.find_by(id: params[:id]).destroy
      render json: {message: "User has been deleted"}
    end

    private
    def user_params
      params.require(:user).permit(:id,:username)
    end
end
