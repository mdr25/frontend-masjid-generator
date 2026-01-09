import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import CrudLayout from "../../../components/common/CrudLayout";

const JamaahList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem("mid_jamaah") || "[]");
    setData(stored);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let updated = [...data];
    if (formData.id) {
      const idx = updated.findIndex((x) => x.id === formData.id);
      updated[idx] = formData;
    } else {
      updated.push({ ...formData, id: Date.now() });
    }
    localStorage.setItem("mid_jamaah", JSON.stringify(updated));
    setData(updated);
    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Hapus data jamaah ${item.name}?`)) {
      const updated = data.filter((x) => x.id !== item.id);
      localStorage.setItem("mid_jamaah", JSON.stringify(updated));
      setData(updated);
    }
  };

  const openModal = (item = null) => {
    setFormData(item || { id: null, name: "", address: "", phone: "" });
    setShowModal(true);
  };

  const columns = [
    {
      header: "Nama Jamaah",
      accessor: "name",
      render: (row) => <strong>{row.name}</strong>,
    },
    { header: "Alamat", accessor: "address" },
    { header: "Kontak", accessor: "phone" },
  ];

  return (
    <>
      <CrudLayout
        title="Data Jamaah"
        columns={columns}
        data={data}
        onCreate={() => openModal()}
        onEdit={(item) => openModal(item)}
        onDelete={handleDelete}
        emptyMessage="Belum ada data jamaah."
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{formData.id ? "Edit" : "Tambah"} Jamaah</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>No HP / WA</Form.Label>
              <Form.Control
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button variant="success" type="submit">
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default JamaahList;
