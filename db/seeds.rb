# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times do
  Gallery.create title: Faker::Name.name
end
Gallery.all.each do |gallery|
  10.times do
    gallery.photos.create name: Faker::Name.name, remote_path_url: Faker::Avatar.image
  end
end
