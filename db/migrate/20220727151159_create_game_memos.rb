class CreateGameMemos < ActiveRecord::Migration[7.0]
  def change
    create_table :game_memos do |t|
      t.integer :game_id
      t.integer :memo_id

      t.timestamps
    end
  end
end
