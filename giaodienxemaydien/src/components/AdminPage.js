import React, { useState, useEffect } from "react";
import NhaCCList from "./NhaCCList";
import NhaCCForm from "./NhaCCForm";
import axios from "axios";

// Đảm bảo đã import file CSS

const AdminPage = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [suppliers, setSuppliers] = useState([]);

  // Fetch suppliers when the component is mounted
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/nhacc")
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleEdit = (nhaCC) => {
    setSelectedSupplier(nhaCC);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhà cung cấp này không?")) {
      axios
        .delete(`http://localhost:8080/api/nhacc/${id}`)
        .then(() => {
          setSuppliers(
            suppliers.filter((supplier) => supplier.idNhaCungCap !== id)
          );
        })
        .catch((error) => console.error("Error deleting supplier:", error));
    }
  };

  const handleSave = () => {
    setSelectedSupplier(null);
    // Refresh the supplier list
    axios
      .get("http://localhost:8080/api/nhacc")
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  };

  return (
    <div className="admin-page">
      <h1>Quản lý nhà cung cấp</h1>
      <div className="supplier-form">
        <NhaCCForm supplier={selectedSupplier} onSave={handleSave} />
      </div>
      <div className="supplier-list">
        <NhaCCList
          onEdit={handleEdit}
          onDelete={handleDelete}
          suppliers={suppliers}
        />
      </div>
    </div>
  );
};

export default AdminPage;
