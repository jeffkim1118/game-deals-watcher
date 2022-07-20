class WishlistsController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :show, :create]
    
end
