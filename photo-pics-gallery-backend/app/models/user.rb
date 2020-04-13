class User < ApplicationRecord
  has_many :likes
  has_many :created_pictures, class_name: "Picture"
  has_many :liked_pictures, through: :likes, source: :picture
end
