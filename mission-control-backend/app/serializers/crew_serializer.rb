class CrewSerializer < ActiveModel::Serializer
  attributes :id, :name, :skill, :cost
  # has_one :mission
end
