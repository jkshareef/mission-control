class EventSerializer < ActiveModel::Serializer
  attributes :id, :content, :resource_cost
  belongs_to :mission
end
