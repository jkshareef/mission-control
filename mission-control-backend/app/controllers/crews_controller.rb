class CrewsController < ApplicationController
    def index
        crews = Crew.all
        render json: crews
    end

    def show
        crew = Crew.find(params[:id])
        render json: crew
    end

    def create
        @crew = Crew.create(crew_params)
        render json: @crew
    end

    def destroy
        @crew = Crew.find(params[:id])
        @crew.destroy
    end



    private

    def crew_params
        params.require(:crew).permit(:name, :skill, :rating, :gender, :cost, :mission_id)
    end
    
end
