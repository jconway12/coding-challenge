class CreateSeasonTags < ActiveRecord::Migration[5.2]
  def change
    create_table :season_tags do |t|
      t.integer :item_id, null: false
      t.integer :season_id, null: false

      t.timestamps
    end
  end
end
