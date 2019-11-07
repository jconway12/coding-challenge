class CreateClothes < ActiveRecord::Migration[5.2]
  def change
    create_table :clothes do |t|
      t.string :title, null: false
      t.string :color, null: false
      t.string :style, null: false

      t.timestamps
    end
  end
end
