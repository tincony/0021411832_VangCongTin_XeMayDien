// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn trống</p>
      ) : (
        cartItems.map(item => (
          <div key={item.idXeMayDien} className="cart-item">
            <p>{item.tenXeMD}</p>
            <p>Giá: {item.gia} vnđ</p>
          </div>
        ))
      )}
      {cartItems.length > 0 && <button onClick={onCheckout}>Đặt Hàng</button>}
    </div>
  );
};

export default Cart;
