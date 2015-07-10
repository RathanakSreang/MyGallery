Rails.application.routes.draw do
  
  devise_for :users
  resources :users do
    collection do
      get :email_validate
    end
  end
  resources :galleries do
    collection do
      get :all_galleries
    end
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
