class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :gameID
      t.string :retailPrice
      t.string :cheapestPrice
      t.string :thumb
      t.integer :user_id
      t.timestamps
    end
  end
end
