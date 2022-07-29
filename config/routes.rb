Rails.application.routes.draw do
  # resources :game_memos
  # resources :memos
  # resources :games
  # resources :users
  resources :sessions

  #--------------USER------------------------------
  # Create Session
  get '/login', to: "sessions#create"
  # Show all users
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

  post '/users/:id/avatar', to: "users#upload_avatar"
  
  # -------------GAMES Routes----------------------

  get '/games', to: 'games#index'
  # Show all the games that belongs to logged in user
  get '/users/:id/games', to: "games#show"
  # Create a new wishlist
  post '/games', to: "games#create"
  # Delete a game from wishlist
  delete '/users/:id/games/:id', to: "games#destroy"


  #-------------Memo Routes------------------------
  # Show memos that belongs to a game
  get '/games/:id/memos', to: "memos#show"
  # Post memos to a game
  post '/games/:id/memos', to: "memos#create"


  root to: "main#index"

end
