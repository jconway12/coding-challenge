Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :items, only: [:show, :index, :create, :destroy]
    resources :seasons, only: [:index, :show]
    resources :season_tags, only: [:create, :destroy]
  end

end
