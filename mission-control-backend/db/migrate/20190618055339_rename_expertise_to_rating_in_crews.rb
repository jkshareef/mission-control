class RenameExpertiseToRatingInCrews < ActiveRecord::Migration[5.2]
  def change
    rename_column :crews, :expertise, :rating 
  end
end
