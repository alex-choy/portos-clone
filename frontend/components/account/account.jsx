import React from 'react';
import { Link } from 'react-router-dom';
import UsersOrders from './users_orders';

class Account extends React.Component {

  componentDidMount() {
    this.props.getOrders(this.props.currentUser.id);
  }

  render() {
    const { orders } = this.props;
    if(orders.length < 1) {
      return (
        <div className="no-renderd-page no-orders">
          <h2>Looks like you have no orders!</h2> <br />
          <Link to="/order">Click here to make an order</Link>
        </div>
      );
    } 
    return (
      <div className="account-wrapper">
        <h2>Account Page</h2>
        <h1>My Orders</h1>
        <div className="users-orders">
          <UsersOrders orders={orders}/>
        </div>
        
      </div>
    );
  }
}

export default Account;