class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :picture_id, :total_likes

  def total_likes
    self.object.picture.num_of_likes
  end
end
