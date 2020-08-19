
import { OPEN_ORDER_MODAL } from "../../actions/modal_actions";
import React from "react";

const OrderModal = (props) => {
  const { modal, closeOrderModal } = props;
  switch (props.modal) {
    case OPEN_ORDER_MODAL:
      break;
    default:
      return null;
  }

  return (
    <div className="order-modal-parent" onClick={closeOrderModal}>
      <div className="order-modal-child" onClick={(e) => e.stopPropagation()}>
        <p>Order Modal</p>
      </div>
    </div>
  );
  
};

export default OrderModal