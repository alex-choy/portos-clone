Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :food_items, only: [:show, :index]
    resources :users, only: [:create, :show] do 
      resources :orders, only: [:index]
    end
    resources :categories, only: [:index]
    resources :orders, only: [:create, :show, :update, :destroy] do
      resources :ordered_food_items, only: [:index]
      resources :food_items, only: [:index]
    end
    resource :session, only: [:new, :create, :destroy]
  end
end
