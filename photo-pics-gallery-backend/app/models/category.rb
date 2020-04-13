class Category < ApplicationRecord
  has_many :picture_categorys
  has_many :pictures, through: :picture_categorys
end
