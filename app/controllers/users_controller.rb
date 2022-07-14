class UsersController < ApplicationController
    def index
        users = User.all()
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create_user
        new_user = User.create(user_params)
        if new_user.valid?
            render json: new_user, status: :created
        else
            render json: {error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update_user_profile
        currentUser = User.find_by(id: session[:id])
        if currentUser
            currentUser.update(user_update_params)

    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end

    private
    def user_params
        params.permit(:first_name, :last_name, :email, :phone, :username, :password)
    end

    def user_update_params
        params.permit(:first_name, :last_name, :phone, :password)
    end
end
