// Header.js
import React from 'react';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>Hotline: 0909 123 456</p>
      </div>
      <div className="nav-bar">
        <div className="logo">
          <h1>XE MÁY ĐIỆN</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button className="search-button">Tìm</button>
        </div>
        <div className="actions">
          <div className="cart-icon">Giỏ Hàng</div>
          {!isAuthenticated ? (
            <div className="auth-buttons">
              <button className="login-button">Đăng Nhập</button>
              <button className="register-button">Đăng Ký</button>
            </div>
          ) : (
            <button className="logout-button" onClick={onLogout}>Đăng Xuất</button>
          )}
        </div>
      </div>
      <div className="nav-categories">
        <nav>
          <a href="#electric-motorbikes">Xe Máy Điện</a>
          <a href="#suppliers">Nhà Cung Cấp</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
