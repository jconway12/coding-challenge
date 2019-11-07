class Api::SeasonsController < ApplicationController 
    def show
    end

    def index
    end

    def create
    end

    def destroy
    end

    private
    def season_params
      params.require(:season).permit(:season, :id)
    end
end