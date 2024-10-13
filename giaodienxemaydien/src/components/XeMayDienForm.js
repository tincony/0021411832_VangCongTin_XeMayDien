import React, { useState, useEffect } from "react";
import axios from "axios";
import './XeMayDienForm.css'; // Import CSS

const XeMayDienForm = ({ xeMayDien, onSave, nhaCungCapList }) => {
  const [formState, setFormState] = useState({
    tenXeMD: "",
    hinhAnh: "",
    gia: "",
    soLuong: "",
    moTa: "",
    nhaCungCap: { idNhaCungCap: "" },
  });

  useEffect(() => {
    if (xeMayDien) {
      setFormState(xeMayDien);
    }
  }, [xeMayDien]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update nested state for nhaCungCap
    if (name === "nhaCungCap.idNhaCungCap") {
      setFormState({
        ...formState,
        nhaCungCap: { idNhaCungCap: value },
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.idXeMayDien) {
      axios
        .put(
          `http://localhost:8080/api/xemaydien/${formState.idXeMayDien}`,
          formState
        )
        .then(() => onSave())
        .catch((error) =>
          console.error("Lỗi khi cập nhật xe máy điện:", error)
        );
    } else {
      axios
        .post("http://localhost:8080/api/xemaydien", formState)
        .then(() => onSave())
        .catch((error) =>
          console.error("Lỗi khi thêm xe máy điện mới:", error)
        );
    }
  };

  return (
    <div className="admin-page">
      <form onSubmit={handleSubmit}>
        <h2>{formState.idXeMayDien ? "Sửa Xe Máy Điện" : "Thêm Xe Máy Điện"}</h2>
        <input
          name="tenXeMD"
          placeholder="Tên Xe Máy Điện"
          value={formState.tenXeMD}
          onChange={handleChange}
          required
        />
        <input
          name="hinhAnh"
          placeholder="Hình ảnh"
          value={formState.hinhAnh}
          onChange={handleChange}
        />
        <input
          name="gia"
          placeholder="Giá"
          type="number"
          value={formState.gia}
          onChange={handleChange}
          required
        />
        <input
          name="soLuong"
          placeholder="Số lượng"
          type="number"
          value={formState.soLuong}
          onChange={handleChange}
          required
        />
        <textarea
          name="moTa"
          placeholder="Mô tả"
          value={formState.moTa}
          onChange={handleChange}
        />
        <select
          name="nhaCungCap.idNhaCungCap"
          value={formState.nhaCungCap.idNhaCungCap}
          onChange={handleChange}
          required
        >
          <option value="">Chọn nhà cung cấp</option>
          {nhaCungCapList.map((nhaCC) => (
            <option key={nhaCC.idNhaCungCap} value={nhaCC.idNhaCungCap}>
              {nhaCC.tenNhaCungCap}
            </option>
          ))}
        </select>
        <button type="submit">
          {formState.idXeMayDien ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
      <div className="actions">
        <button onClick={() => onSave()}>Xóa</button>
        <button onClick={() => { /* Tìm kiếm logic */ }}>Tìm kiếm</button>
      </div>
    </div>
  );
};

export default XeMayDienForm;
