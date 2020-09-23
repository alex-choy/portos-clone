import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import OrderItemModalContainer from "../order_page/order_item_modal_container";

export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ORDER_ITEM_MODAL = "ORDER_ITEM_MODAL";

const Modal = (props) => {
  const { modal, closeModal, editedQuantity } = props;
  if(!modal) {
    return null;
  } 
  let component;
  switch(modal.popupModal) {
    case LOGIN_MODAL:
      component = <LoginFormContainer />;
      break;
    case SIGNUP_MODAL:
      component = <SignupFormContainer />;
      break;
    case ORDER_ITEM_MODAL:
      let quantity, buttonText;
      if(editedQuantity) {
        quantity = editedQuantity;
        buttonText = "Update Cart"
      } else {
        quantity = 1;
        buttonText = "Add to Cart"
      }
      component = <OrderItemModalContainer foodItem={props.foodItem} quantity={quantity} buttonText={buttonText}/>;
      break;
    default: 
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mSTP = (state) => {

  const newState = {
    modal: state.ui.modal,
    foodItem: state.entities.foodItems[state.ui.currentFoodId],
  };

  // for editing a shopping cart quantity
  const {shoppingCart, currentFoodId} = state.ui;
  if(shoppingCart.length > 0) {
    const foodItemCartIdx = shoppingCart.findIndex(foodItem => foodItem.foodId === currentFoodId);
    // add item's cart quantity if present in the shopping cart
    if(foodItemCartIdx >= 0) {
      newState.editedQuantity = shoppingCart[foodItemCartIdx].quantity;
    }
  } 
  return newState;
}

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);