class RemoveMissionIdFromEvents < ActiveRecord::Migration[5.2]
  def change
      remove_column :events, :mission_id
  end
end
