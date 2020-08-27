export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const ORDER_ERRORS = "ORDER_ERRORS";

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
});

const receiveOrderErrors = (errors) => ({
  type: ORDER_ERRORS,
  errors
});


export const createOrder = (shoppingCart, order) => (dispatch) => (
  OrderAPIUtil.createOrder(shoppingCart, order)
    .then(
      (order) => dispatch(receiveOrder(order)),
      (errors) => dispatch(receiveOrderErrors(errors.responseJSON))
    )
);

export const getOrder = (orderId) => (dispatch) => (
  OrderAPIUtil.requestOrder(orderId)
    .then((order) => dispatch(receiveOrder(order)))
);

