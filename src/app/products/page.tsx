import React from 'react';
import Link from 'next/link';
const Products = () => {
  return (
    <div>
      <h1>Products:</h1>
        <ul>
          
          <li>product 1</li>
          <li>product 2</li>
          <li>product 3</li>
          <li>product 4</li>
          <li>product 5</li>
          <li>product 6</li>
          <li>product 7</li>
          <Link href= '/'>Home page</Link>
        </ul>
    </div>
  );
};

export default Products;