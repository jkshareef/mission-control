class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :food, :oxygen, :fuel, :medicine
  # has_one :mission
end
