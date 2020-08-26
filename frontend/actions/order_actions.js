export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";

import * as OrderAPIUtil from '../utils/orders_api_util';

const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders
});

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order
});

const removeOrder = (orderId) => ({
  type: REMOVE_ORDER,
  orderId
})


export const createOrder = (shoppingCart, order) => (dispatch) => (
  OrderAPIUtil.createOrder(shoppingCart, order)
    .then((order) => dispatch(receiveOrder(order)))
);