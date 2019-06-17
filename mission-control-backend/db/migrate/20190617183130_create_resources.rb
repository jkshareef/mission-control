class CreateResources < ActiveRecord::Migration[5.2]
  def change
    create_table :resources do |t|
      t.integer :food
      t.integer :oxygen
      t.integer :fuel
      t.integer :medicine
      t.references :mission, foreign_key: true

      t.timestamps
    end
  end
end
