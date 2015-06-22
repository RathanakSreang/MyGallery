class Photo < ActiveRecord::Base
  self.table_name = "images"
  belongs_to :gallery
  mount_uploader :path, ImageUploader
  validates :name, presence: true
  default_scope { order("created_at DESC") } 
end
