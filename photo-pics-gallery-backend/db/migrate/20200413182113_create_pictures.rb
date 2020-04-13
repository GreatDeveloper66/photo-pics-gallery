class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.string :img_url
      t.integer :creator_id

      t.timestamps
    end
  end
end
