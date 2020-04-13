class User < ApplicationRecord
  has_many :likes
  has_many :created_pictures, through: :likes, source: :picture
  has_many :liked_pictures, through: :likes, source: :picture
end
