class MissionSerializer < ActiveModel::Serializer
  def initialize(mission_object)
    @mission = mission_object
  end

  def to_serialized_json
    options = {
      include: {
        crews: {
          only: [:name, :skill, :rating, :cost, :gender]
        },
        destinations: {
          only: [:name, :location, :distance, :object_source]
        },
        resources: {
          only: [:food, :oxygen, :fuel, :medicine]
        }
      },
      except: [:created_at, :updated_at],
    }
    @mission.to_json(options)
  end
end
