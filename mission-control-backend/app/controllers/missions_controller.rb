class MissionsController < ApplicationController


    def index
        missions = Mission.all
        render json: MissionSerializer.new(missions).to_serialized_json
    end
    def create
        mission = Mission.create
        render json: MissionSerializer.new(mission).to_serialized_json
    end
end
