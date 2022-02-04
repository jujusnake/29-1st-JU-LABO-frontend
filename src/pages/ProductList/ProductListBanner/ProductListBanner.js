import React from 'react';
import './ProductListBanner.scss';

const ProductListBanner = ({ params }) => {
  const SEASON_DATA = ['Spring', 'Summer', 'Autumn', 'Winter'];

  return (
    <div className="banner">
      <img
        alt="banner"
        src="https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <h1>{SEASON_DATA[params.category_id - 1].toUpperCase()}</h1>
    </div>
  );
};

export default ProductListBanner;
