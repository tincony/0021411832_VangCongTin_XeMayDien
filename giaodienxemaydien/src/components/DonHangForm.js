// src/components/DonHangForm.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonHangForm = ({ selectedDonHang, onClose }) => {
    const [donHang, setDonHang] = useState({
        ngayDat: '',
        khachHang: { idKhachHang: '' },
        taiKhoan: { idTaiKhoan: '' },
        trangThaiDH: { idTrangThai: '' }
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const [khachHangs, setKhachHangs] = useState([]);
    const [taiKhoans, setTaiKhoans] = useState([]);
    const [trangThaiDHs, setTrangThaiDHs] = useState([]);

    useEffect(() => {
        if (selectedDonHang) {
            setDonHang(selectedDonHang);
            setIsEditMode(true);
        }
        fetchKhachHangs();
        fetchTaiKhoans();
        fetchTrangThaiDHs();
    }, [selectedDonHang]);

    const fetchKhachHangs = async () => {
        const response = await axios.get('http://localhost:8080/api/khachhang');
        setKhachHangs(response.data);
    };

    const fetchTaiKhoans = async () => {
        const response = await axios.get('http://localhost:8080/api/taiKhoan');
        setTaiKhoans(response.data);
    };

    const fetchTrangThaiDHs = async () => {
        const response = await axios.get('http://localhost:8080/api/trangthai'); // Cập nhật URL cho trang thái đơn hàng
        setTrangThaiDHs(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonHang({ ...donHang, [name]: value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (isEditMode) {
            await axios.put(`http://localhost:8080/api/donhang/${donHang.idDonHang}`, donHang);
        } else {
            await axios.post('http://localhost:8080/api/donhang', donHang);
        }
        onClose();
    };

    return (
        <div>
            <h2>{isEditMode ? 'Sửa Đơn Hàng' : 'Thêm Đơn Hàng'}</h2>
            <form onSubmit={handleSave}>
                <div>
                    <label>Ngày Đặt:</label>
                    <input
                        type="date"
                        name="ngayDat"
                        value={donHang.ngayDat ? new Date(donHang.ngayDat).toISOString().split('T')[0] : ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Khách Hàng:</label>
                    <select
                        name="khachHang.idKhachHang"
                        value={donHang.khachHang.idKhachHang || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn Khách Hàng</option>
                        {khachHangs.map(kh => (
                            <option key={kh.idKhachHang} value={kh.idKhachHang}>
                                {kh.tenKhachHang}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tài Khoản:</label>
                    <select
                        name="taiKhoan.idTaiKhoan"
                        value={donHang.taiKhoan.idTaiKhoan || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn Tài Khoản</option>
                        {taiKhoans.map(tk => (
                            <option key={tk.idTaiKhoan} value={tk.idTaiKhoan}>
                                {tk.tenTK}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Trạng Thái:</label>
                    <select
                        name="trangThaiDH.idTrangThai"
                        value={donHang.trangThaiDH.idTrangThai || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn Trạng Thái</option>
                        {trangThaiDHs.map(tt => (
                            <option key={tt.idTrangThai} value={tt.idTrangThai}>
                                {tt.tenTrangThai}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Lưu</button>
                <button type="button" onClick={onClose}>Hủy</button>
            </form>
        </div>
    );
};

export default DonHangForm;
