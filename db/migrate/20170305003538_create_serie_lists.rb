class CreateSerieLists < ActiveRecord::Migration[5.0]
  def change
    create_table :serie_lists do |t|
      t.integer :user_id, null: false
      t.integer :serie_id, null: false
      t.timestamps
    end
    add_index :serie_lists, :user_id
    add_index :serie_lists, :serie_id
  end
end
