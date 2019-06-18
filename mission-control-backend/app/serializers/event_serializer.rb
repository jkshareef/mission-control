class EventSerializer < ActiveModel::Serializer
  attributes :id, :content, :resource_cost
  # has_one :mission
end
