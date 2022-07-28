class GamesController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :show, :create, :show_game]

    def index
        games = Game.all
        render json: games, include: :user
    end

    def show
        games = User.find_by(id: params[:id]).games
        render json: games, include: :user_id
    end

    def create
        user = User.find_by(id: session[:user_id])
        game = user.games.create(games_params)
        if game.valid?
            # byebug
            render json: game, status: :created
        else
            render jsons: {error: game.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        game = user.games.find_by(id: params[:id])
        if game
            game.destroy
            render json: {}
        else
            render json: { error: "Game not found" }, status: :not_found
        end
    end

    def show_game
        user = User.find_by(id: session[:user_id])
        if user
            game = user.games.find_by(id: params[:game_id])
            render json: game
        else
            render json: { error: "Game not found" }, status: :not_found
        end
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def games_params
        params.permit(:title, :gameID, :retailPrice, :cheapestPrice, :thumb)
    end 

end
