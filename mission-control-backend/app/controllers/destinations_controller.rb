class DestinationsController < ApplicationController
    
    def index
        destinations = Destination.all
        render json: destinations
    end
    
    def show
        destination = Destination.find(params[:id])
        render json: destination
    end

    def create
        destination = Destination.create(name: params[:name], object_source: params[:object_source], id: params[:mission_id])
        render json: destination
    end





    
end
