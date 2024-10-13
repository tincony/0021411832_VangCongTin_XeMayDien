import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPageXeMayDien.css'; // Import CSS styles


const AdminPageXeMayDien = () => {
  const [xeMayDienList, setXeMayDienList] = useState([]);
  const [nhaCCList, setNhaCCList] = useState([]);
  const [newXeMayDien, setNewXeMayDien] = useState({
    tenXeMD: '',
    hinhAnh: '',
    gia: 0,
    soLuong: 0,
    moTa: '',
    nhaCungCap: null,
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Lấy danh sách xe máy điện
  const fetchXeMayDien = async () => {
    const response = await axios.get('http://localhost:8080/api/xemaydien');
    setXeMayDienList(response.data);
  };

  // Lấy danh sách nhà cung cấp
  const fetchNhaCC = async () => {
    const response = await axios.get('http://localhost:8080/api/nhacc');
    setNhaCCList(response.data);
  };

  useEffect(() => {
    fetchXeMayDien();
    fetchNhaCC();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewXeMayDien((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNhaCCChange = (e) => {
    const selectedNhaCC = nhaCCList.find((item) => item.idNhaCungCap === Number(e.target.value));
    setNewXeMayDien((prev) => ({
      ...prev,
      nhaCungCap: selectedNhaCC,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/xemaydien', newXeMayDien);
    fetchXeMayDien(); // Cập nhật danh sách sau khi thêm mới
    setNewXeMayDien({ // Reset form
      tenXeMD: '',
      hinhAnh: '',
      gia: 0,
      soLuong: 0,
      moTa: '',
      nhaCungCap: null,
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/xemaydien/${id}`);
    fetchXeMayDien(); // Cập nhật danh sách sau khi xóa
  };

  const handleEdit = (xe) => {
    setNewXeMayDien(xe); // Thiết lập xe máy điện hiện tại vào form để sửa
  };

  const filteredXeMayDienList = xeMayDienList.filter(xe =>
    xe.tenXeMD.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <h2>Quản lý Xe Máy Điện</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="tenXeMD"
          placeholder="Tên Xe"
          value={newXeMayDien.tenXeMD}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hinhAnh"
          placeholder="Link Hình Ảnh"
          value={newXeMayDien.hinhAnh}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="gia"
          placeholder="Giá"
          value={newXeMayDien.gia}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="soLuong"
          placeholder="Số Lượng"
          value={newXeMayDien.soLuong}
          onChange={handleChange}
          required
        />
        <textarea
          name="moTa"
          placeholder="Mô Tả"
          value={newXeMayDien.moTa}
          onChange={handleChange}
        />
        <select onChange={handleNhaCCChange} required>
          <option value="">Chọn Nhà Cung Cấp</option>
          {nhaCCList.map((nhaCC) => (
            <option key={nhaCC.idNhaCungCap} value={nhaCC.idNhaCungCap}>
              {nhaCC.tenNhaCungCap}
            </option>
          ))}
        </select>
        <button type="submit">Thêm Xe Máy Điện</button>
      </form>

      <h3>Danh Sách Xe Máy Điện</h3>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul>
        {filteredXeMayDienList.map((xe) => (
          <li key={xe.idXeMayDien}>
            <img src={xe.hinhAnh} alt={xe.tenXeMD} style={{ width: '100px', height: 'auto' }} />
            <div>
              <h4>{xe.tenXeMD}</h4>
              <p>Giá: {xe.gia} VND</p>
              <p>Số Lượng: {xe.soLuong}</p>
              <p>Mô Tả: {xe.moTa}</p>
              <p>Nhà Cung Cấp: {xe.nhaCungCap?.tenNhaCungCap}</p>
              <div className="button-group">
                <button onClick={() => handleEdit(xe)}>Sửa</button>
                <button onClick={() => handleDelete(xe.idXeMayDien)}>Xóa</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPageXeMayDien;
