class Memo < ApplicationRecord
    # has_many :game_memos, dependent: :destroy
    # has_many :games, through: :game_memos
    belongs_to :game
    
end
