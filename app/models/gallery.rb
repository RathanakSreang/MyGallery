class Gallery < ActiveRecord::Base
  has_many :photos
  validates :title, presence: true

  default_scope { order("created_at DESC") } 
end
