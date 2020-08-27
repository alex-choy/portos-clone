import React from 'react';

const OrderShowInfo = (props) => {
  const { notes, changeNotes, pickupTime, updateNotes } = props;
  return (
    <section className="col-3-8 order-info">
      <h3>Pickup Time:</h3>
      <span>{pickupTime}</span>
      <h3>Order Notes:</h3>
      <textarea
        className="order-notes"
        value={notes}
        onChange={changeNotes}
        cols="30"
        rows="10"
      ></textarea>
      <button className="update-notes" onClick={updateNotes}>Update Notes</button>
    </section>
  );
};

export default OrderShowInfo;