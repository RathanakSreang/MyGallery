Rails.application.routes.draw do
  
  devise_for :users, controllers: { sessions: "sessions", registrations: "registrations" }
  resources :users do
    collection do
      get :email_validate
    end
  end
  resources :galleries do
    resources :photos
  end
  namespace :admin do
    root "static_pages#dashboard"
    resources :pages
    resources :galleries
    resources :photos    
  end  
  get "help" => "static_pages#help"
  get "about" => "static_pages#about"
  get "contact" => "static_pages#contact"
  root "static_pages#home"
end
