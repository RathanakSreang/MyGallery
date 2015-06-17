class Photo < ActiveRecord::Base
  self.table_name = "images"
  belongs_to :gallery
  mount_uploader :path, ImageUploader
  validates :name, :path, presence: true
end
