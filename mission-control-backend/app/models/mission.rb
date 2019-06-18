class Mission < ApplicationRecord
    has_many :destinations
    has_many :crews 
    has_many :events
    has_many :resources


    def get_resources(food, oxygen, fuel, medicine)
        self.resources.build(food: food, oxygen: oxygen, fuel: fuel, medicine: medicine)
    end
end
