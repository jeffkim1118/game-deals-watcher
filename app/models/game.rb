class Game < ApplicationRecord
    belongs_to :user
    has_many :game_memos, dependent: :destroy
    has_many :memos, through: :game_memos, dependent: :destroy
end
