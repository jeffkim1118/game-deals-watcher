class CreateMemos < ActiveRecord::Migration[7.0]
  def change
    create_table :memos do |t|
      t.string :content
      t.integer :game_id
      
      t.timestamps
    end
  end
end
