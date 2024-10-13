import React, { useState } from "react";
import "./XeMayDienList.css"; // Import CSS

const XeMayDienList = ({ xeMayDienList, onEdit, onDelete, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredXeMayDienList = xeMayDienList.filter((xeMayDien) =>
    xeMayDien.tenXeMD.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="xe-may-dien-container">
      <h2>Danh sách Xe Máy Điện</h2>
      <div className="action-buttons">
        <button className="add-button" onClick={onAdd}>Thêm Xe</button>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <table className="xe-may-dien-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Xe</th>
            <th>Hình Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Nhà Cung Cấp</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredXeMayDienList.map((xeMayDien) => (
            <tr key={xeMayDien.idXeMayDien}>
              <td>{xeMayDien.idXeMayDien}</td>
              <td>{xeMayDien.tenXeMD}</td>
              <td>
                <img
                  src={xeMayDien.hinhAnh}
                  alt={xeMayDien.tenXeMD}
                  className="xe-may-img"
                />
              </td>
              <td>{xeMayDien.gia}</td>
              <td>{xeMayDien.soLuong}</td>
              <td>{xeMayDien.moTa}</td>
              <td>{xeMayDien.nhaCungCap?.tenNhaCungCap}</td>
              <td>
                <button className="edit-button" onClick={() => onEdit(xeMayDien)}>Sửa</button>
                <button className="delete-button" onClick={() => onDelete(xeMayDien.idXeMayDien)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XeMayDienList;
