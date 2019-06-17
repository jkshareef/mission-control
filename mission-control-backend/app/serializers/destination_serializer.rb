class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :distance
  has_one :mission
end
