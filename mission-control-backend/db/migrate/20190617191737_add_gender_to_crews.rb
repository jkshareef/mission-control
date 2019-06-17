class AddGenderToCrews < ActiveRecord::Migration[5.2]
  def change
    add_column :crews, :gender, :string
  end
end
