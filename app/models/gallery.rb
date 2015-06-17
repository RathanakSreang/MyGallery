class Gallery < ActiveRecord::Base
  validates :title, presence: true
end
