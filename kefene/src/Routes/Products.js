import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [expired, setExpired] = useState(false);
  const [lowStock, setLowStock] = useState(false);

  const getProductsData = () => {
    axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('error fetching', error);
      });
  }
  useEffect(() => {
    getProductsData();
  }, []);

  const applyFilters = () => {
    const currentDate = new Date();

    return products.filter((product) => {
      if (expired && new Date(product.expiryDate) < currentDate && !lowStock) {
        return true;
      }
      if (lowStock && product.stock < 100 && !expired) {
        return true;
      }
      if (expired && new Date(product.expiryDate) < currentDate && lowStock && product.stock < 200) {
        return true;
      }
      if (!expired && !lowStock) {
        return true;
      }
      return false;
    });
  }

  const filteredProducts = applyFilters();
  return (
    <div>
      <div>
        <center style={{ fontFamily: 'monospace', fontSize: '40px', margin: "20px" , fontWeight : '600'}}>
          Total Products
        </center>
      </div>
      <div id="order-main-section">
        <div id="filter-section">
          <h2 className='filter-head'>Filters</h2>
          <p className='count'>
            Count: {filteredProducts.length}
          </p>
          <div id="input-checks">
            <div className="checkbox-item">
              <input type="checkbox" id="expired" name='expired' onChange={() => setExpired(!expired)} />
              <label htmlFor="expired-checkbox">Expired</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="lowStock" name='lowStock' onChange={() => setLowStock(!lowStock)} />
              <label htmlFor="lowStock-checkbox">Low stock</label>
            </div>
          </div>
        </div>
        <hr />
        <div id="data-section">
          <table id="table-main">
            <thead>
              <tr>
                <th>Id</th>
                <th>Product name</th>
                <th>Product brand</th>
                <th>Expiry date</th>
                <th>Unit price $</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td style={{ color: '#8c8c8c' }}>{product.id}</td>
                  <td>{product.medicineName}</td>
                  <td>{product.medicineBrand}</td>
                  <td style={{ border: 'none', textAlign: 'left', color: '#8c8c8c' }}>{product.expiryDate}</td>
                  <td style={{ color: '#8c8c8c' }}>${product.unitPrice}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
