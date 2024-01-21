// PrintableBill.js
import React from 'react';

const PrintableBill = ({ user, products }) => {
  return (
    <div>
      <h1>{user.name}'s Bill</h1>
      {/* Display other user and product details here */}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrintableBill;
