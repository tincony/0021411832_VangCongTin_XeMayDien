// src/components/DonHangList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonHangForm from './DonHangForm';

const DonHangList = () => {
    const [donHangs, setDonHangs] = useState([]);
    const [selectedDonHang, setSelectedDonHang] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchDonHangs();
    }, []);

    const fetchDonHangs = async () => {
        const response = await axios.get('http://localhost:8080/api/donhang');
        setDonHangs(response.data);
    };

    const handleEdit = (donHang) => {
        setSelectedDonHang(donHang);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/donhang/${id}`);
        fetchDonHangs();
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedDonHang(null);
        fetchDonHangs();
    };

    return (
        <div>
            <h2>Danh sách Đơn Hàng</h2>
            <button onClick={() => setShowForm(true)}>Thêm Đơn Hàng</button>
            {showForm && (
                <DonHangForm
                    selectedDonHang={selectedDonHang}
                    onClose={handleCloseForm}
                />
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ngày Đặt</th>
                        <th>Khách Hàng</th>
                        <th>Tài Khoản</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {donHangs.map((donHang) => (
                        <tr key={donHang.idDonHang}>
                            <td>{donHang.idDonHang}</td>
                            <td>{new Date(donHang.ngayDat).toLocaleDateString()}</td>
                            <td>{donHang.khachHang.tenKhachHang}</td>
                            <td>{donHang.taiKhoan.tenTK}</td>
                            <td>{donHang.trangThaiDH.tenTrangThai}</td>
                            <td>
                                <button onClick={() => handleEdit(donHang)}>Sửa</button>
                                <button onClick={() => handleDelete(donHang.idDonHang)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonHangList;
