class Mission < ApplicationRecord
    has_many :destinations, :crews, :events, :resources


    def get_resources(food, oxygen, fuel, medicine)
        self.resources.build(food: food, oxygen: oxygen, fuel: fuel, medicine:, medicine)
    end
end
