class Api::OrdersController < ApplicationController
  def index

  end

  def show

  end

  def create
    # data: { order: {currUser, :notes, :time}, shopping_cart }
    shopping_cart = JSON.parse(params[:shopping_cart]) 
    # debugger
    p shopping_cart
    shopping_cart.each do |food_info|
      fi = FoodItem.find(food_info["foodId"])
      
      # Check that items are in stock before ordering
      if food_info["quantity"] > fi.quantity
        render json: ["Not enough items in stock, try ordering again"], status: 422
      end
    end

    order = Order.new(order_params)

    if order.save 
      shopping_cart.each do |food_info|
        
      end
    else
      render json: order.errors.full_messages, status: 422
    end

  end

  def update

  end

  def destroy

  end

  private
  def order_params
    params.require(:order).permit(:buyer_id, :notes, :pickup_time)
  end
end
