import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import AdminPageXeMayDien from "./AdminPageXeMayDien";
import AdminPageTaiKhoan from "./AdminPageTaiKhoan";
import KhachHangList from "./KhachHangList";
import DonHangList from "./DonHangList";
import TrangThaiDHList from "./TrangThaiDHList";
import './styles.css'; // Import custom CSS

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("xemaydien");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "nhacc":
        return <AdminPage />;
      case "xemaydien":
        return <AdminPageXeMayDien />;
      case "taikhoan":
        return <AdminPageTaiKhoan />;
      case "khachhang":
        return <KhachHangList />;
      case "donhang":
        return <DonHangList />;
      case "trangthaidonhang":
        return <TrangThaiDHList />;
      default:
        return <AdminPageXeMayDien />;
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>QUẢN TRỊ XE MÁY ĐIỆN</h1>
        <button className="logout-btn" onClick={handleLogout}>Đăng Xuất</button>
      </header>

      <nav className="nav-tabs">
        <button className={`nav-link ${activeTab === "xemaydien" ? "active" : ""}`} onClick={() => setActiveTab("xemaydien")}>
          Xe Máy Điện
        </button>
        <button className={`nav-link ${activeTab === "nhacc" ? "active" : ""}`} onClick={() => setActiveTab("nhacc")}>
          Nhà Cung Cấp
        </button>
        <button className={`nav-link ${activeTab === "taikhoan" ? "active" : ""}`} onClick={() => setActiveTab("taikhoan")}>
          Tài Khoản
        </button>
        <button className={`nav-link ${activeTab === "khachhang" ? "active" : ""}`} onClick={() => setActiveTab("khachhang")}>
          Khách Hàng
        </button>
        <button className={`nav-link ${activeTab === "donhang" ? "active" : ""}`} onClick={() => setActiveTab("donhang")}>
          Đơn Hàng
        </button>
        <button className={`nav-link ${activeTab === "trangthaidonhang" ? "active" : ""}`} onClick={() => setActiveTab("trangthaidonhang")}>
          Trạng Thái Đơn Hàng
        </button>
      </nav>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
