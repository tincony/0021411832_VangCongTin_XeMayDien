import React, { useState, useEffect } from "react";
import axios from "axios";

const NhaCCForm = ({ supplier, onSave }) => {
  const [formState, setFormState] = useState({
    idNhaCungCap: "",
    tenNhaCungCap: "",
    diaChi: "",
    soDienThoai: "",
    email: "",
  });

  useEffect(() => {
    if (supplier) {
      setFormState(supplier);
    }
  }, [supplier]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.idNhaCungCap) {
      // Cập nhật nhà cung cấp
      axios
        .put(
          `http://localhost:8080/api/nhacc/${formState.idNhaCungCap}`,
          formState
        )
        .then(() => onSave())
        .catch((error) => console.error(error));
    } else {
      // Tạo nhà cung cấp mới
      axios
        .post("http://localhost:8080/api/nhacc", formState)
        .then(() => onSave())
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {formState.idNhaCungCap ? "Sửa nhà cung cấp" : "Thêm nhà cung cấp"}
      </h2>
      <input
        name="tenNhaCungCap"
        placeholder="Tên nhà cung cấp"
        value={formState.tenNhaCungCap}
        onChange={handleChange}
        required
      />
      <input
        name="diaChi"
        placeholder="Địa chỉ"
        value={formState.diaChi}
        onChange={handleChange}
      />
      <input
        name="soDienThoai"
        placeholder="Số điện thoại"
        value={formState.soDienThoai}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
      />
      <button type="submit">
        {formState.idNhaCungCap ? "Cập nhật" : "Thêm"}
      </button>
    </form>
  );
};

export default NhaCCForm;
