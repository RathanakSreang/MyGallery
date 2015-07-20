class GalleriesController < ApplicationController
  before_action :set_gallery, only: [:show, :edit, :update, :destroy]
  def show
        #  @galleries = Gallery.all
    respond_to do |format|
      format.html do
        # @galleries = Gallery.all
      end
    # format.html
    format.json { render json: [gallery: @gallery, :photos => @gallery.photos]}
    end
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new gallery_params
    if @gallery.save
      render json: @gallery
    else 
      render json: {errors: @gallery.errors.full_messages}
    end
  end

  def edit
  end

  def update
    @gallery = Gallery.find params[:id]
    puts @gallery
    if @gallery.update_attributes gallery_params
      render json: @gallery
    else
      render json: {errors: @gallery.errors.full_messages}
    end
  end

  def destroy
    @gallery = Gallery.find params[:id]
    @gallery.destroy
    render json: @gallery
  end
  def index
    #  @galleries = Gallery.all
    respond_to do |format|
      format.html do
        @galleries = Gallery.all
      end
    # format.html
    format.json { render json: Gallery.all}
    end
  end

  private

  def gallery_params
    params.require(:gallery).permit :id, :title
  end
  def set_gallery
    @gallery = Gallery.find params[:id]  
  end
end
