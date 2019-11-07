class Api::SeasonsController < ApplicationController 
    def show
        @season = Season.find(params[:id])
    end

    def index
        @seasons = Season.all
    end
end