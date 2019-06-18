Rails.application.routes.draw do
  get '/destinations/:id', to: 'destinations#show'
  get '/destinations', to: 'destinations#index'
  get '/crews', to: 'crews#index'
  get '/crews/:id', to: 'crews#show'
  post 'crews', to: 'crews#create'
  post 'destinations', to 'destinations#create'
  get '/events', to: 'events#index'
  get 'events/:id', to: 'events#show'
  post 'missions', to: 'missions#create'
  # resources :resources 
  # resources :destinations
  # resources :events
  # resources :crews
  # resources :missions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
