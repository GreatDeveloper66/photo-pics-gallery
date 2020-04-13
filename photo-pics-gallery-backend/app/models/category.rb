class Category < ApplicationRecord
  has_many :picture_categories
  has_many :pictures, through: :picture_categories

  def recent_pictures
    pictures.max(5) {|pic_1, pic_2| pic_1.created_at <=> pic_2.created_at}
  end
end
