Rails.application.routes.draw do
  
  resources :galleries do
    resources :photos
  end
  namespace :admin do
    root "static_pages#dashboard"
    resources :pages
    resources :galleries
    resources :photos    
  end
  get "static_pages/help"
  get "static_pages/about"
  get "static_pages/contact"
  root "static_pages#home"
end
