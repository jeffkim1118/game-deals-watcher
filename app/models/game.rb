class Game < ApplicationRecord
    has_and_belongs_to_many :wishlists
    belongs_to :user
end
