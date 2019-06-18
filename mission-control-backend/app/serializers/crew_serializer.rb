class CrewSerializer < ActiveModel::Serializer
  attributes :id, :name, :skill, :cost, :rating
  # # belongs_to :mission
end
