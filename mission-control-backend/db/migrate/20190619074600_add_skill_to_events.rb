class AddSkillToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :skill, :string
  end
end
