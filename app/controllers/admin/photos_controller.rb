class Admin::PhotosController < ApplicationController
  layout "admin/application"

  def show
    @photo = Photo.find params[:id]
  end

  def index
    @photos = Photo.all.paginate page: params[:page], per_page: 10
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new photo_params
    if @photo.save
      flash[:success] = "Successful Create"
      redirect_to [:admin, @photo]
    else
      flash[:danger] = "Fail Create"
      render "new"
    end
  end

  def edit
    @photo = Photo.find params[:id]
  end

  def update
    @photo = Photo.find params[:id]
    @photo.attributes = photo_params
    if @photo.save
      flash[:success] = "Successful Update"
      redirect_to [:admin, @photo]
    else
      flash.now[:danger] = "Fail Update"
      render "edit"
    end
  end

  def destroy
    @photo = Photo.find params[:id]
    @photo.delete
    flash[:success] = "Successful Delete"
    redirect_to request.referer || admin_photos_path
  end

  private
  def photo_params
    params.require(:photo).permit :id, :name, :path, :path_cache,
                                  :remote_path_url, :description, :gallery_id
  end
end
