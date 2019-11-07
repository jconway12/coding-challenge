class Api::SeasonTagsController < ApplicationController 
    def index
        @season_tags = SeasonTag.all
    end
    
    def create
        @season_tag = SeasonTag.create(season_tag_params)
        if @season_tag.save
            render json: @season_tag
        else
            render json: @season_tag.errors.full_message, status: 422
        end
    end

    def destroy
        season_tag = SeasonTag.find(params[:id])
        season_tag.destroy
    end

    private
    def season_tag_params
        params.require(:season_tag).permit(:season_id, :id, :item_id)
    end
end