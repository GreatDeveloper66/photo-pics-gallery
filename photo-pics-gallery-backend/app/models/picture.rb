class Picture < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :picture_categories
  has_many :categories, through: :picture_categories
  has_many :likes
  has_many :users, through: :likes
end
