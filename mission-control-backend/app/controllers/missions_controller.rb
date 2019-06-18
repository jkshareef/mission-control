class MissionsController < ApplicationController


    def index
        missions = Mission.all
        render json: missions
    end
    def create
        mission = Mission.create
        render json: mission
    end
end
