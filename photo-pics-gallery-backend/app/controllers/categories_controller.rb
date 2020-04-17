class CategoriesController < ApplicationController

    def index
        categories = Category.alphabetical
        render json: categories
    end

    def show
        category = Category.find(params[:id])
        render json: category
    end
end