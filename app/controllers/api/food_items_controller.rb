class Api::FoodItemsController < ApplicationController
  def index
    if params[:order_id]
      @order = Order.includes(:food_items).find_by(id: params[:order_id])
      @food_items = @order.food_items
    else
      @food_items = FoodItem.all
    end
  end

  def show
    @food_item = FoodItem.find(params[:id])
  end
end
