class EventSerializer < ActiveModel::Serializer
  attributes :id, :content, :resource_cost
<<<<<<< HEAD
  # has_one :mission
=======
  belongs_to :mission
>>>>>>> 069235455b181a982220703df8db536ed5aa52ba
end
