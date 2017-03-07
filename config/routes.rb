Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :series, only: [:index, :show]
    resources :reviews, only: [:index]
    resources :serie_lists, only: [:index, :create, :destroy]
  end
end
