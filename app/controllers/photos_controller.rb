class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  def index
    @gallery = Gallery.find params[:gallery_id]
    render json: @gallery.photos
  end

  def show
    
  end

  def new
    @gallery = Gallery.find params[:gallery_id]
    @photo = @gallery.photos.build
  end

  def create
    
    @gallery = Gallery.find params[:gallery_id]
    
    @photo = @gallery.photos.build name: params[:name], path: params[:path], description: params[:description]
    if @photo.save
      render json: @photo
    else 
      render json: {errors: @photo.errors.full_messages}    
    end
  end

  def edit
  end

  def update      
    if @photo.update_attributes  name: params[:name], path: params[:path],
        description: params[:description]
      render json: @photo
    else
      render json: {errors: @photo.errors.full_messages}
    end
  end

  def destroy    
    @photo = @gallery.photos.find params[:id]
    @photo.destroy
    render json: @photo
  end

  private
  # def photo_params
  #   params.require(:photo).permit :id, :name, :path, :path_cache, :description
  # end

  def set_photo
    @gallery = Gallery.find params[:gallery_id]
    @photo = @gallery.photos.find params[:id]
  end
end
