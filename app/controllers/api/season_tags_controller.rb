class Api::SeasonTagsController < ApplicationController 
    def create
    end

    def destroy
    end

    private
    def season_tag_params
        params.require(:season_tag).permit(:season_id, :id, :item_id)
    end
end