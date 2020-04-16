Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  resources :categories, only: [:index, :show]
  resources :pictures, only: [:create, :show, :destroy, :index]

  resources :users, only: [:index,:show,:new,:create,:edit,:update,:destroy]
  resources :sessions, only: [:new,:create]
  resources :likes, only: [:index,:show,:new,:create]
end
