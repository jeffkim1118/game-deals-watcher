class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized
    skip_before_action :verify_authenticity_token, raise: false

    def authorized
        return render json: {error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
