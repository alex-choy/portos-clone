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
      return <div>Looks like you have no orders! <br/><Link to="/order">Click here to make orders</Link></div>
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