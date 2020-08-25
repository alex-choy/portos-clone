import { ORDER_ITEM_MODAL } from "../components/shared_components/popup_modal";


export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const OPEN_ORDER_ITEM_MODAL = "OPEN_ORDER_ITEM_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_ORDER_ITEM_MODAL_ID = "SET_ORDER_ITEM_MODAL_ID";

export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

// tells session_modal which component to render on the page
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openSessionModal = (modal) => ({
  type: OPEN_SESSION_MODAL,
  modal,
});

export const openOrderItemModal = () => ({
  type: OPEN_ORDER_ITEM_MODAL,
  modal: ORDER_ITEM_MODAL
});

export const setOrderItemModalId = (foodId) => ({
  type: SET_ORDER_ITEM_MODAL_ID,
  foodId
}); 

// export const openOrderItemModalAndSetFoodId = (foodId) => (dispatch) => {
//   // dispatch(openOrderItemModal()).then(() => dispatch(setOrderItemModalId(foodId)))
//   return dispatch(openOrderItemModal())
//     .then(() => dispatch(setOrderItemModalId(foodId)));
// };

// export const openOrderModal
// export const closeLogoutModal = () => ({
//     type: CLOSE_LOGOUT_MODAL,
//   });

// export const openLogoutModal = (modal) => ({
//   type: OPEN_LOGOUT_MODAL,
//   modal,
// });

// leave these, homepage order modals
export const openOrderModal = () => ({
  type: OPEN_ORDER_MODAL,
});
export const closeOrderModal = () => ({
  type: CLOSE_ORDER_MODAL,
});

