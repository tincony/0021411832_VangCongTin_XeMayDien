import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = ({ onLogin }) => {
  const [tenTK, setTenTK] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8080/api/taikhoan/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tenTK, matKhau }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('isAuthenticated', 'true'); // Mark user as logged in
        onLogin(); // Call onLogin function from AdminDashboard to change state
      } else {
        setError('Tài khoản hoặc mật khẩu không chính xác');
      }
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại sau');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="tenTK">Tên tài khoản:</label>
            <input
              type="text"
              className="form-control"
              id="tenTK"
              value={tenTK}
              onChange={(e) => setTenTK(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="matKhau"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Đăng Nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
