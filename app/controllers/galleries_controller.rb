class GalleriesController < ApplicationController
  before_action :set_gallery, only: [:show, :edit, :update, :destroy]
  def show
    
  end

  def index
    @galleries = Gallery.all
  end

  def new
    @gallery = Gallery.new  
  end

  def create
    @gallery = Gallery.new gallery_params
    if @gallery.save
      redirect_to @gallery
    else
      render "new"
    end
  end

  def edit
    
  end

  def update
    @gallery.attributes = gallery_params
    if @gallery.save
      redirect_to @gallery
    else
      render "edit"
    end
  end

  def destroy
    
  end

  private
  def set_gallery
    @gallery = Gallery.find params[:id]  
  end

  def gallery_params
    params.require(:gallery).permit :id, :title
  end
end
