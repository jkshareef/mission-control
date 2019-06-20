class AddRepeatToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :repeat, :boolean
  end
end
