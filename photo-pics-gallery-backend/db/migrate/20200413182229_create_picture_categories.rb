class CreatePictureCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :picture_categories do |t|
      t.integer :picture_id
      t.integer :category_id

      t.timestamps
    end
  end
end
