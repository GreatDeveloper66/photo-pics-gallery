class Picture < ApplicationRecord
  belongs_to :creator, class_name :"User"
  has_many :picture_categorys
  has_many :categorys through: :picture_categorys
  has_many :likes
  has_many :users, through: :likes
end
