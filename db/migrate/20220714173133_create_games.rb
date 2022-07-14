class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.decimal :retailPrice
      t.decimal :cheapestPrice
      t.integer :deal_id

      t.timestamps
    end
  end
end
