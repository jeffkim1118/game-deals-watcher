class MemosController < ApplicationController
    skip_before_action :authorized
    def show
        game = Game.find_by(id: params[:id])
        memos = game.memos
        if memos
            render json: memos
        else
            render json: { error: memos.errors.full_messages}
        end
    end

    def create  
        game = Game.find_by(id: params[:id])
        memo = game.memos.create(memos_params)
        if memo.valid?
            render json: memo, status: :created
        else
            render jsons: {error: memo.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def delete
        user = User.find_by(id: session[:user_id])
        game = user.games.find_by(id: params[:id])
        memo = game.memos.find_by(id: params[:id])
        if memo
            memo.delete
            render json: {}
        else
            render json: {error: "The memo doesn't exist"}
        end
    end

    private
    def memos_params
        params.permit(:content)
    end 
end
