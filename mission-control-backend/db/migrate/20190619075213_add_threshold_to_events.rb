class AddThresholdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :threshold, :integer
  end
end
