class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :pictures, :categories, :likes, :liked_pictures

  def pictures
    self.object.created_pictures.map do |picture|
      {
        id: picture.id,
        img_url: picture.img_url,
        categories: picture.category_names
      }
    end
  end

  def categories
    self.object.created_pictures.map {|picture| picture.category_names}.flatten.uniq
  end

  def liked_pictures
    self.object.likes.map{ |like| like.picture }
  end

end
