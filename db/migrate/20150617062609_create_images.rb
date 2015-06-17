class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.string :path
      t.string :description
      t.date :shoot_date

      t.timestamps null: false
    end
  end
end