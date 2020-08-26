class Api::OrderedFoodItemsController < ApplicationController
  def index
    order = Order.find(params[:order_id])
    @ordered_food_items = order.ordered_food_items
  end
end
