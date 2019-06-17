class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :content
      t.integer :resource_cost
      t.references :mission, foreign_key: true

      t.timestamps
    end
  end
end
