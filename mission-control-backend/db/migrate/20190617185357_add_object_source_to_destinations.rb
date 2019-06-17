class AddObjectSourceToDestinations < ActiveRecord::Migration[5.2]
  def change
    add_column :destinations, :object_source, :string
  end
end
