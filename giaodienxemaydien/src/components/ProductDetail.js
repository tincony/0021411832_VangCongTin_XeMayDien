// ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onAddToCart }) => {
  return (
    <div className="product-detail">
      <h1>{product.tenXeMD}</h1>
      <img src={product.hinhAnh} alt={product.tenXeMD} />
      <p>Giá: {product.gia} vnđ</p>
      <p>Mô Tả: {product.moTa}</p>
      <button onClick={() => onAddToCart(product)}>Thêm Vào Giỏ</button>
    </div>
  );
};

export default ProductDetail;

