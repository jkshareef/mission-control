class CrewsController < ApplicationController
    def index
        crews = Crew.all
        render json: crews
    end

    def show
        crew = Crew.find(params[:id])
        render json: crew
    end
end
