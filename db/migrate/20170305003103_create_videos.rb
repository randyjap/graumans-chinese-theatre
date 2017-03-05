class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :number, null: false
      t.integer :serie_id, null: false
      t.string :thumb_url, null: false
      t.string :url, null: false
      t.timestamps
    end
    add_index :videos, :serie_id
  end
end
