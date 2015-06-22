class Admin::GalleriesController < ApplicationController
  before_action :set_gallery, only: [:show, :edit, :update, :destroy]

  layout "admin/application"
  
  def show
    @photos = @gallery.photos.paginate page: params[:page], per_page: 8
  end

  def index
    @galleries = Gallery.all.paginate page: params[:page], per_page: 10
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new gallery_params
    if @gallery.save
      flash[:success] = "Successful Create"
      redirect_to [:admin, @gallery]
    else
      flash.now[:danger] = "Fail Create"
      render "new"
    end
  end

  def edit
    
  end

  def update
    @gallery.attributes = gallery_params
    if @gallery.save
      flash[:success] = "Successful Update"
      redirect_to [:admin, @gallery]
    else
      flash.now[:danger] = "Fail Update"
      render "edit"
    end
  end

  def destroy
    @gallery.delete
    flash[:success] = "Successful Delete"
    redirect_to admin_galleries_path
  end

  private
  def set_gallery
    @gallery = Gallery.find params[:id]  
  end

  def gallery_params
    params.require(:gallery).permit :id, :title
  end
end
