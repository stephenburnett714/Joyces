Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/products/appetizer', to: 'products#appetizer'

  resources :products do
    collection do
      put :categories
    end
  end
  resources :line_items
  resources :orders
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
