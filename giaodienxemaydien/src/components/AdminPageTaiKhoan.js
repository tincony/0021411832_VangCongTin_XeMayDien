import React, { useEffect, useState } from "react";
import axios from "axios";
import TaiKhoanList from "./TaiKhoanList";
import TaiKhoanForm from "./TaiKhoanForm";

const AdminPageTaiKhoan = () => {
  const [taiKhoanList, setTaiKhoanList] = useState([]);
  const [selectedTaiKhoan, setSelectedTaiKhoan] = useState(null);

  // Lấy danh sách tài khoản
  const fetchTaiKhoan = async () => {
    const response = await axios.get("http://localhost:8080/api/taikhoan");
    setTaiKhoanList(response.data);
  };

  useEffect(() => {
    fetchTaiKhoan();
  }, []);

  const handleEdit = (taiKhoan) => {
    setSelectedTaiKhoan(taiKhoan);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/taikhoan/${id}`);
    fetchTaiKhoan(); // Cập nhật danh sách sau khi xóa
  };

  const handleSave = () => {
    setSelectedTaiKhoan(null);
    fetchTaiKhoan(); // Cập nhật danh sách sau khi thêm hoặc sửa
  };

  return (
    <div>
      <h1>Quản lý Tài Khoản</h1>
      <TaiKhoanForm taiKhoan={selectedTaiKhoan} onSave={handleSave} />
      <TaiKhoanList taiKhoanList={taiKhoanList} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AdminPageTaiKhoan;
