class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  def index
    
  end

  def show
    
  end

  def new
    @gallery = Gallery.find params[:gallery_id]
    @photo = @gallery.photos.build
  end

  def create
    @gallery = Gallery.find params[:gallery_id]
    @photo = @gallery.photos.build photo_params
  end

  def edit
    
  end

  def update
    
  end

  def destroy
    
  end

  private
  def photo_params
    params.require(:photo).permit :id, :name, :path, :description
  end

  def set_photo
    gallery = Gallery.find params[:gallery_id]
    @photo = gallery.photos.find params[:id]
  end
end
