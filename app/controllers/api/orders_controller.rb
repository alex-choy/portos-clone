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

    @order = Order.new(order_params)

    if @order.save 
      shopping_cart.each do |food_info|
        food_id = food_info["foodId"]
        quantity = food_info["quantity"]
        ofi = OrderedFoodItem.new(
          order_id: @order.id, 
          food_item_id: food_id, 
          quantity: quantity)

        if ofi.save
          food_item = FoodItem.find(food_id)
          food_item.quantity -= quantity
          if food_item.save
          else
            render json: food_item.errors.full_messages, status: 422
          end
        else
          render json: ofi.errors.full_messages, status: 422
        end
      end
      render json: ["Successfully created all food items!"]
    else
      render json: @order.errors.full_messages, status: 422
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
