class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, methods: :recent_pictures
    end

    def show
        category = Category.find(params[:id])
        render json: category, methods: :sorted_pictures
    end
end