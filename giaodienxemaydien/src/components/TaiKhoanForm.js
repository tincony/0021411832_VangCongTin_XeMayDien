import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaiKhoanForm = ({ taiKhoan, onSave }) => {
  const [formData, setFormData] = useState({
    tenTK: '',
    matKhau: '',
    email: '',
    vaiTro: '',
  });

  useEffect(() => {
    if (taiKhoan) {
      setFormData({
        tenTK: taiKhoan.tenTK,
        matKhau: taiKhoan.matKhau,
        email: taiKhoan.email,
        vaiTro: taiKhoan.vaiTro,
      });
    } else {
      setFormData({
        tenTK: '',
        matKhau: '',
        email: '',
        vaiTro: '',
      });
    }
  }, [taiKhoan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taiKhoan) {
      // Cập nhật tài khoản
      await axios.put(`http://localhost:8080/api/taikhoan/${taiKhoan.idTaiKhoan}`, formData);
    } else {
      // Thêm mới tài khoản
      await axios.post('http://localhost:8080/api/taikhoan', formData);
    }
    onSave(); // Gọi hàm onSave để cập nhật danh sách
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tenTK"
        placeholder="Tên Tài Khoản"
        value={formData.tenTK}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="matKhau"
        placeholder="Mật Khẩu"
        value={formData.matKhau}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="vaiTro"
        placeholder="Vai Trò"
        value={formData.vaiTro}
        onChange={handleChange}
      />
      <button type="submit">{taiKhoan ? 'Cập Nhật' : 'Thêm Tài Khoản'}</button>
    </form>
  );
};

export default TaiKhoanForm;
