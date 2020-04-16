class PicturesController < ApplicationController

    def create
        picture = Picture.create(picture_params)
        render json: picture, include: [:categories, :creator]
    end

    def show
        picture = Picture.find(params[:id])
        render json: picture, include: [:categories, :creator]
    end

    def destroy
        Picture.find(params[:id]).destroy
        render json: {message: "success"}
    end

    private

    def picture_params
        params.require(:new_picture).permit(:creator_id, :img_url, :categories_attributes => [:name])
    end
end
