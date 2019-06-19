class EventSerializer < ActiveModel::Serializer
  attributes :id, :content, :resource_cost, :resource_cost,
  :acceleration, :skill, :threshold
  # has_one :mission
end
