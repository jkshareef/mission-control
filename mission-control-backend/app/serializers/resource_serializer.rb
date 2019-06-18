class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :food, :oxygen, :fuel, :medicine
<<<<<<< HEAD
  # has_one :mission
=======
  belongs_to :mission
>>>>>>> 069235455b181a982220703df8db536ed5aa52ba
end
