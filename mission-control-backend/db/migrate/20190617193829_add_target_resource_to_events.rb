class AddTargetResourceToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :target_resource, :string
  end
end
