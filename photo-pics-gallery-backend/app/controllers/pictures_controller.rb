class PicturesController < ApplicationController

    def create
        picture = Picture.create(params[:picture])
        render json: picture, include: :categories
    end

    def show
        picture = Picture.find(params[:id])
        render json: picture, include: :categories
    end

    def destroy
        Picture.find(params[:id]).destroy
    end
end