
import { OPEN_ORDER_MODAL } from "../../actions/modal_actions";
import React from "react";
import { Link } from 'react-router-dom';

class OrderModal extends React.Component {

  componentDidUpdate() {
    if(this.props.modal) {
      const homepageVideo = document.getElementById("homepage-video");
      const closeModal = document.getElementById("close-modal");
      closeModal.addEventListener("click", () => {
        homepageVideo.play();
      });
    }
  }

  render() {
    const { modal, closeOrderModal } = this.props;
    switch (this.props.modal) {
      case OPEN_ORDER_MODAL:
        break;
      default:
        return null;
    }

    return (
      <div className="order-modal-parent">
        <button
          id="close-modal"
          className="order-modal-close"
          onClick={closeOrderModal}
        >
          <i className="far fa-times-circle"></i>
        </button>
        <div className="order-modal-child" onClick={(e) => e.stopPropagation()}>
          <span className="order-modal-title ord-mod">
            <h2>OPEN TO</h2>
            <h2>SERVE YOU</h2>
          </span>
          <div className="order-btn-wrapper">
            <span className="order-modal-subtitle ord-mod">
              <p>You better sit tight in your car</p>
            </span>
            <Link className="ord-button pickup" to="/order">
              Pickup In-Store
            </Link>
          </div>
          <div className="order-btn-wrapper">
            <span className="order-modal-subtitle ord-mod">
              <p>Maybe it'll ship, maybe it won't</p>
            </span>
            <Link to="/menu" className="ord-button delivery">
              See Our Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
};

export default OrderModal