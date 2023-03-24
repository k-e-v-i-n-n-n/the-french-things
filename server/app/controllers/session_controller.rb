class SessionController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {error: "Try again :)"}, status: :unauthorized
        end
    end

 
end
