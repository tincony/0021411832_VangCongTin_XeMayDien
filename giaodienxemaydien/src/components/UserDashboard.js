// UserDashboard.js
import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import './UserDashboard.css';

const UserDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(null); // Close the detail view
  };

  const handleCheckout = () => {
    setCheckoutVisible(true);
  };

  const handlePlaceOrder = (customerInfo) => {
    console.log("Order placed:", customerInfo, cart);
    setCart([]);
    setCheckoutVisible(false);
  };

  return (
    <div className="user-dashboard">
      <Header />
      <h2>Xe Máy Điện</h2>
      <ProductList onSelectProduct={handleSelectProduct} />
      <h2>Nhà Cung Cấp</h2>
      <ProductList onSelectProduct={handleSelectProduct} /> {/* Replace with supplier component if necessary */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} />
      )}
      <Cart cartItems={cart} onCheckout={handleCheckout} />
      {checkoutVisible && <Checkout onPlaceOrder={handlePlaceOrder} />}
    </div>
  );
};

export default UserDashboard;
