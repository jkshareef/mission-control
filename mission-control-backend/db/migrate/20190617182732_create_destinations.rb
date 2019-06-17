class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :location
      t.string :distance
      t.references :mission, foreign_key: true

      t.timestamps
    end
  end
end
