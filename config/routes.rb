Rails.application.routes.draw do
  resources :games
  resources :wishlists
  resources :users
  resources :sessions
  
  get '/login', to: "sessions#create"
  post "/login", to: "sessions#create"

  # Register new user
  post '/users', to: "users#create"
  # Logout user
  delete '/logout', to: "sessions#destroy"

  get '/me', to: "users#show"

end
