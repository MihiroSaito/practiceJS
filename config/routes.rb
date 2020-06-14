Rails.application.routes.draw do
  root "homes#index"
  
  get "pictures", to: "homes#pictures"
end
