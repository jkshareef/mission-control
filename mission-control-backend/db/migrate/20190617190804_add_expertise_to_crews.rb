class AddExpertiseToCrews < ActiveRecord::Migration[5.2]
  def change
    add_column :crews, :expertise, :integer
  end
end
