class CreateSeries < ActiveRecord::Migration[5.0]
  def change
    create_table :series do |t|
      t.string :name, null: false
      t.integer :year, null: false
      t.string :mpaa_rating, null: false
      t.text :description, null: false
      t.string :cover_url, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
    add_index :series, :genre_id
  end
end
