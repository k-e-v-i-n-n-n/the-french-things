class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable

    def create
        user = User.find_by!(id: session[:user_id])
        category = user.categories.create!(category_params)
        render json: category, status: :created
    end

    def destroy
        category = Category.find(params[:id])
        category.delete
        head :no_content
    end

    private

    def category_params
        params.permit(:category)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: user.errors.full_messages}, status: :not_found
    end
end
