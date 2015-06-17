Rails.application.routes.draw do
  
  resources :galleries do
    resources :photos
  end
  get "static_pages/help"
  get "static_pages/about"
  get "static_pages/contact"
  root "static_pages#home"
end
