Rails.application.routes.draw do
  # resources :games
  # resources :users
  resources :wishlists
  resources :sessions
  
  get '/login', to: "sessions#create"
  get '/users', to: "users#index"
  # Register new user
  post '/users', to: "users#create"
  # Login User
  post "/login", to: "sessions#create"
  # Logout user
  delete '/logout', to: "sessions#destroy"
  # Update User profile
  patch '/users/:id', to: "users#update"
  # Keep user logged in
  get '/me', to: "users#show"
  # Get request for find user based on User id
  get '/users/:id', to: "users#find_user"

  # -------------GAMES Routes----------------------

  # Show all the games that belongs to logged in user
  get '/games/:id', to: "games#show"
  # Create a new wishlist
  post '/games', to: "games#create"
  # Delete a game from wishlist
  delete '/games/:id', to: "games#destroy"
end
