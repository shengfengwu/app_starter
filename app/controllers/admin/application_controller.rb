class Admin::ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_admin!
end
