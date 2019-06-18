class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :distance
  belongs_to :mission
end
