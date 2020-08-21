
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
    <div className="order-modal-parent">
      <button className="order-modal-close" onClick={closeOrderModal}>&times;</button>
      <div className="order-modal-child" onClick={(e) => e.stopPropagation()}>
        <span className="order-modal-title ord-mod">
          <h2>OPEN TO</h2>
          <h2>SERVE YOU</h2>
        </span>
        <span className="order-modal-subtitle ord-mod">
          <p>You better sit tight in your car</p>
        </span>
        <button className="ord-button pickup">Pickup In-Store</button>
        <br />
        <br />
        <span className="order-modal-subtitle ord-mod">
          <p>Maybe it'll ship, maybe it won't</p>
        </span>
        <button className="ord-button delivery">Home Delivery</button>
      </div>
    </div>
  );
  
};

export default OrderModal