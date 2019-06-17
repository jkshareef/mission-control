class AddAccelerationToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :acceleration, :boolean
  end
end
