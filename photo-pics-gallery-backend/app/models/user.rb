class User < ApplicationRecord
  has_many :likes
  has_many :created_pictures, class_name: "Picture"
  has_many :liked_pictures, through: :likes, source: :picture

  def likes_picture(picture)
    Like.create(user_id:self.id,picture_id:picture.id);
  end
end
