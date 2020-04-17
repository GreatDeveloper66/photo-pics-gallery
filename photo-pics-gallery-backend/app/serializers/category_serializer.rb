class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :recent_pictures, :sorted_pictures

  def recent_pictures
    self.object.recent_pictures
  end

  def sorted_pictures
    self.object.sorted_pictures.map do |picture|
      {
        id: picture.id,
        img_url: picture.img_url,
        num_of_likes: picture.num_of_likes,
        creator: picture.creator,
        categories: picture.categories,
      }
    end
  end
end
