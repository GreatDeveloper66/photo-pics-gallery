class Picture < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :picture_categories, dependent: :destroy
  has_many :categories, through: :picture_categories
  has_many :likes
  has_many :users, through: :likes

  def categories_attributes=(cat_attributes)
    puts cat_attributes
    cat_attributes.each do |attributes|
      categories << Category.find_or_create_by(name: attributes["name"])
    end
  end
end
