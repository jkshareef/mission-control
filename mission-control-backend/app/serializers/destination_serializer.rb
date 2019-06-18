class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :distance
<<<<<<< HEAD
  # has_one :mission
=======
  belongs_to :mission
>>>>>>> 069235455b181a982220703df8db536ed5aa52ba
end
