class User < ApplicationRecord
    has_secure_password
    has_many :games, through: :wishlist
    has_one :wishlist

    has_one_attached :profile_image
end
