Rails.application.routes.draw do
  devise_for :admins, path: 'admin',
                      skip: %w[password],
                      path_names: {
                        sign_in: 'login',
                        sign_out: 'logout'
                      },
                      controllers: {
                        sessions: 'devise/admins/sessions'
                      }

  root 'pages#index'

  # Back-Stage UI for Administrators
  namespace :admin do
    root to: redirect('admin/dashboard')

    resource :dashboard, only: %i[show], controller: 'dashboard'
    resources :admins, only: %i[index show]
    resource :profile, only: %i[show update], controller: 'profile' do
      resource :password, only: %i[update], controller: 'profile/password'
    end
  end

  # API routes
  namespace :api do
    namespace :v1 do
      namespace :web do
        resources :admins, only: %i[index show]
      end
    end
  end
end
