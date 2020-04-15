class LikesController < ApplicationController
    def create
      like = Like.create(user_params)
      render json:like
    end
    def index
      likes = Like.all
      render json:likes
    end
    def show
      like = Like.find_by(id: params[:id])
      render json:like
    end

    private
    def user_params
      params.require(:like).permit(:user_id,:picture_id)
    end
end
