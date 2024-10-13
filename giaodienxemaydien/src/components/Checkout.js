// Checkout.js
import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ onPlaceOrder }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(customerInfo);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Thông Tin Khách Hàng</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Địa Chỉ"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Số Điện Thoại"
        onChange={handleChange}
        required
      />
      <button type="submit">Đặt Hàng</button>
    </form>
  );
};

export default Checkout;
