// ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <img src={product.hinhAnh} alt={product.tenXeMD} />
      <h2>{product.tenXeMD}</h2>
      <p>{product.gia} vnđ</p>
      <button className="view-details">Xem Chi Tiết</button>
    </div>
  );
};

export default ProductCard;
