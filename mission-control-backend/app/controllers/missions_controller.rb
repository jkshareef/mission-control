class MissionsController < ApplicationController

    def create
        mission = Mission.create
        render json: mission
    end
end
