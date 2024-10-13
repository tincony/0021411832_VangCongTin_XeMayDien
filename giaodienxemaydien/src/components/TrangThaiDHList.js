import React, { useState, useEffect } from "react";
import axios from "axios";

const TrangThaiDHList = () => {
  const [trangThaiList, setTrangThaiList] = useState([]);
  const [newTrangThai, setNewTrangThai] = useState("");
  const [editTrangThai, setEditTrangThai] = useState(null);
  const [editName, setEditName] = useState("");

  // Fetch all TrangThaiDH on component load
  useEffect(() => {
    fetchTrangThaiList();
  }, []);

  const fetchTrangThaiList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/trangthaidonhang"
      );
      setTrangThaiList(response.data);
    } catch (error) {
      console.error("Error fetching TrangThaiDH list:", error);
    }
  };

  const handleCreateTrangThai = async () => {
    if (newTrangThai.trim() === "") return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/trangthaidonhang",
        {
          ten: newTrangThai,
        }
      );
      setTrangThaiList([...trangThaiList, response.data]);
      setNewTrangThai(""); // Clear input after creation
    } catch (error) {
      console.error("Error creating new TrangThaiDH:", error);
    }
  };

  const handleDeleteTrangThai = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/trangthaidonhang/${id}`);
      setTrangThaiList(
        trangThaiList.filter((trangThai) => trangThai.idTrangThai !== id)
      );
    } catch (error) {
      console.error("Error deleting TrangThaiDH:", error);
    }
  };

  const handleEditTrangThai = async () => {
    if (editName.trim() === "") return;

    try {
      const response = await axios.put(
        `http://localhost:8080/api/trangthaidonhang/${editTrangThai.idTrangThai}`,
        {
          ten: editName,
        }
      );
      setTrangThaiList(
        trangThaiList.map((trangThai) =>
          trangThai.idTrangThai === editTrangThai.idTrangThai
            ? response.data
            : trangThai
        )
      );
      setEditTrangThai(null);
      setEditName("");
    } catch (error) {
      console.error("Error updating TrangThaiDH:", error);
    }
  };

  const startEdit = (trangThai) => {
    setEditTrangThai(trangThai);
    setEditName(trangThai.ten);
  };

  return (
    <div>
      <h2>Trạng Thái Đơn Hàng</h2>

      {/* List of TrangThaiDH */}
      <ul>
        {trangThaiList.map((trangThai) => (
          <li key={trangThai.idTrangThai}>
            {trangThai.idTrangThai === editTrangThai?.idTrangThai ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={handleEditTrangThai}>Lưu</button>
                <button onClick={() => setEditTrangThai(null)}>Trở Lại</button>
              </>
            ) : (
              <>
                {trangThai.ten}
                <button onClick={() => startEdit(trangThai)}>Sữa</button>
                <button
                  onClick={() => handleDeleteTrangThai(trangThai.idTrangThai)}
                >
                  Xoá
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Create New TrangThaiDH */}
      <div>
        <input
          type="text"
          placeholder="Trạng thái đơn hàng mới"
          value={newTrangThai}
          onChange={(e) => setNewTrangThai(e.target.value)}
        />
        <button onClick={handleCreateTrangThai}>Xác Nhận</button>
      </div>
    </div>
  );
};

export default TrangThaiDHList;
