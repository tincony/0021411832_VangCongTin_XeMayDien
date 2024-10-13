import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KhachHangList = () => {
  const [khachHangs, setKhachHangs] = useState([]);
  const [currentKhachHang, setCurrentKhachHang] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchKhachHangs();
  }, []);

  const fetchKhachHangs = async () => {
    const response = await axios.get('http://localhost:8080/api/khachhang');
    setKhachHangs(response.data);
  };

  const handleEdit = (khachHang) => {
    setCurrentKhachHang(khachHang);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/khachhang/${id}`);
    fetchKhachHangs();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`http://localhost:8080/api/khachhang/${currentKhachHang.idKhachHang}`, currentKhachHang);
    } else {
      await axios.post('http://localhost:8080/api/khachhang', currentKhachHang);
    }
    setCurrentKhachHang(null);
    setIsEditing(false);
    fetchKhachHangs();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentKhachHang((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Quản Lý Khách Hàng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tenKhachHang"
          placeholder="Tên Khách Hàng"
          value={currentKhachHang?.tenKhachHang || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="diaChi"
          placeholder="Địa Chỉ"
          value={currentKhachHang?.diaChi || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="soDienThoai"
          placeholder="Số Điện Thoại"
          value={currentKhachHang?.soDienThoai || ''}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={currentKhachHang?.email || ''}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? 'Cập Nhật' : 'Thêm Khách Hàng'}</button>
      </form>

      <ul>
        {khachHangs.map((khachHang) => (
          <li key={khachHang.idKhachHang}>
            {khachHang.tenKhachHang} - {khachHang.diaChi} - {khachHang.soDienThoai} - {khachHang.email}
            <button onClick={() => handleEdit(khachHang)}>Sửa</button>
            <button onClick={() => handleDelete(khachHang.idKhachHang)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KhachHangList;
