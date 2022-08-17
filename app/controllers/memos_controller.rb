class MemosController < ApplicationController
    skip_before_action :authorized
    def display_all_memos
        memos = Memo.all
        if memos
            render json: memos
        else
            render json: {error: "No memos exist"}
        end
    end


    def show
        game = Game.find_by(id: params[:id])
        memos = game.memos
        if memos
            render json: memos
        else
            render json: { error: memos.errors.full_messages}
        end
    end

    def show_memo
        user = User.find_by(id: session[:user_id])
        games = user.games
        game = games.find_by(id: params[:id])
        memo = game.memos.find_by(id: params[:id])
        if memo
            render json: memo
        else
            render json: {error: "memo not found"}
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
        memo = Memo.find_by(id: params[:id])
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
