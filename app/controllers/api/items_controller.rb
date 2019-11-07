class Api::ItemsController < ApplicationController 
    def index
        @items = Item.all
    end

    def show
        @item = Item.find(params[:id])
    end

    def create
        @item = Item.create(item_params)
        if @item.save
            render :show
        else
            render json: @item.errors.full_message, status: 422
        end
    end

    def destroy
        item = Item.find(params[:id])
        id = item.id
        item.destroy
        render json: id
    end

    private
    def item_params
        params.require(:item).permit(:id, :title, :style, :color)
    end
end