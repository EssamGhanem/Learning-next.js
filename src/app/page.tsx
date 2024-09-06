import React from 'react';
import Link from 'next/link';
import './style.css';

const Home = () => {
  return (
    <div>
      <h1>Hello from home page</h1>
      <Link href='/products'> Products </Link>
      <Link href='/about'> About </Link>
      <Link href='/order-product'> Place order </Link>
      <Link href='/complex-dashboard'> Admin Dashboard</Link>
    </div>
  );
};

export default Home;