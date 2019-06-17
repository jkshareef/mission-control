class CreateCrews < ActiveRecord::Migration[5.2]
  def change
    create_table :crews do |t|
      t.string :name
      t.string :skill
      t.integer :cost
      t.references :mission, foreign_key: true

      t.timestamps
    end
  end
end
