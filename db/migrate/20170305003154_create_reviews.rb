class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :review_text, null: false
      t.integer :serie_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :reviews, :serie_id
    add_index :reviews, :user_id
  end
end
