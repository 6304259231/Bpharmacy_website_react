import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [newf, setNewf] = useState(false);
  const [packed, setPacked] = useState(false);
  const [intransit, setIntransit] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const getOrdersData = () => {
    axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.log('error fetching', error);
      });
  }
  useEffect(() => {
    getOrdersData();
  }, []);

  const filteredOrders = orders.filter((ordere) =>
    (newf && ordere.orderStatus === 'New') ||
    (packed && ordere.orderStatus === 'Packed') ||
    (intransit && ordere.orderStatus === 'InTransit') ||
    (delivered && ordere.orderStatus === 'Delivered') ||
    (!newf && !packed && !intransit && !delivered)
  );

  return (
    <div>
      <center>
        <h1 style={{ fontFamily: 'monospace', fontSize: '40px', margin: "20px", fontWeight : '600'}}>
          Total Orders
        </h1>
      </center>
      <div id="order-main-section">
        <div id="filter-section">
          <h2 className='filter-head'>Filters</h2>
          <p className='count'>
            Count: {filteredOrders.length}
          </p>
          <div id="input-checks">
            <div className="checkbox-item">
              <input type="checkbox" id="new" name='new' onChange={() => setNewf(!newf)} />
              <label htmlFor="new-checkbox">New</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="packed" name='packed' onChange={() => setPacked(!packed)} />
              <label htmlFor="packed-checkbox">Packed</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="intransit" name='intransit' onChange={() => setIntransit(!intransit)} />
              <label htmlFor="in-transit-checkbox">InTransit</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="delivered" name='delivered' onChange={() => setDelivered(!delivered)} />
              <label htmlFor="delivered-checkbox">Delivered</label>
            </div>
          </div>
        </div>
        <hr />
        <div id="data-section">
          <table id="table-main">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customers</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((ordere) => {
                return (
                  <tr key={ordere.id}>
                    <td style={{ color: '#8c8c8c' }}>{ordere.id}</td>
                    <td>{ordere.customerName}</td>
                    <td>{ordere.orderDate}
                    <td style={{ border: 'none', textAlign: 'left', color: '#8c8c8c' }}>{ordere.orderTime}</td>
                    </td>
                    <td style={{ color: '#8c8c8c' }}>${ordere.amount}</td>
                    <td>{ordere.orderStatus}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;


