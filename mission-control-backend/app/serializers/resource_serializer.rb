class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :food, :oxygen, :fuel, :medicine
  belongs_to :mission
end
