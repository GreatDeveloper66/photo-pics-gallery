class Category < ApplicationRecord
  has_many :picture_categories
  has_many :pictures, through: :picture_categories

  def recent_pictures
    pictures.max(4) {|pic_1, pic_2| pic_1.created_at <=> pic_2.created_at}
  end

  def sorted_pictures
    pictures.sort {|pic_1, pic_2| pic_1.created_at <=> pic_2.created_at}
  end

  def self.alphabetical
    all.sort {|c_1, c_2| c_1.name <=> c_2.name}
  end
end
