class User < ApplicationRecord
    has_secure_password
    has_many :games, dependent: :destroy
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :password, presence: true

    has_one_attached :avatar

end
