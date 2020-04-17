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
    all_category_names = self.object.created_pictures.map {|picture| picture.category_names}.flatten.uniq
    all_category_names.sort {|c_1, c_2| c_1 <=> c_2}
  end

  def liked_pictures
    self.object.likes.map{ |like| like.picture }
  end

end
