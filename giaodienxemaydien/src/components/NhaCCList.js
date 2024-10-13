import React, { useState, useEffect } from "react";
import axios from "axios";

const NhaCCList = ({ onEdit, onDelete }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Lấy danh sách nhà cung cấp
    axios
      .get("http://localhost:8080/api/nhacc") // Sử dụng URL đầy đủ
      .then((response) => setSuppliers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredSuppliers = suppliers.filter((nhaCC) =>
    nhaCC.tenNhaCungCap.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách nhà cung cấp</h2>
      <input
        type="text"
        placeholder="Tìm kiếm nhà cung cấp"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((nhaCC) => (
            <tr key={nhaCC.idNhaCungCap}>
              <td>{nhaCC.idNhaCungCap}</td>
              <td>{nhaCC.tenNhaCungCap}</td>
              <td>{nhaCC.diaChi}</td>
              <td>{nhaCC.soDienThoai}</td>
              <td>{nhaCC.email}</td>
              <td>
                <button onClick={() => onEdit(nhaCC)}>Sửa</button>
                <button onClick={() => onDelete(nhaCC.idNhaCungCap)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NhaCCList;
