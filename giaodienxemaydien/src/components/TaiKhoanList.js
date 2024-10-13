import React from 'react';

const TaiKhoanList = ({ taiKhoanList, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Danh Sách Tài Khoản</h2>
      <ul>
        {taiKhoanList.map((taiKhoan) => (
          <li key={taiKhoan.idTaiKhoan}>
            <span>{taiKhoan.tenTK} - {taiKhoan.email} - {taiKhoan.vaiTro}</span>
            <button onClick={() => onEdit(taiKhoan)}>Sửa</button>
            <button onClick={() => onDelete(taiKhoan.idTaiKhoan)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaiKhoanList;
