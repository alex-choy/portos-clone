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

export const updateOrder = (order) => (dispatch) =>
  OrderAPIUtil.updateOrder(order).then(
    (order) => dispatch(receiveOrder(order)),
    (errors) => dispatch(receiveOrderErrors(errors.responseJSON))
  );

export const getOrder = (orderId) => (dispatch) =>
  OrderAPIUtil.requestOrder(orderId).then(
    (order) => dispatch(
      receiveOrder(order)),
      (errors) => dispatch(receiveOrderErrors(errors.responseJSON))
  );

export const getOrders = (userId) => (dispatch) => (
  OrderAPIUtil.requestOrders(userId)
    .then((orders) => dispatch(receiveOrders(orders)))
);

export const deleteOrder = (orderId) => (dispatch) => (
  OrderAPIUtil.deleteOrder(orderId)
    .then((order) => dispatch(removeOrder(Object.keys(order)[0])))
    // only 1 order is returned, could change it to return id instead
);
