import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import CrudLayout from "../../../components/common/CrudLayout";

const DonationList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    date: "",
    donor: "",
    amount: "",
    type: "Infaq",
    notes: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem("mid_donations") || "[]");
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
    localStorage.setItem("mid_donations", JSON.stringify(updated));
    setData(updated);
    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Hapus data donasi ini?`)) {
      const updated = data.filter((x) => x.id !== item.id);
      localStorage.setItem("mid_donations", JSON.stringify(updated));
      setData(updated);
    }
  };

  const openModal = (item = null) => {
    setFormData(
      item || {
        id: null,
        date: new Date().toISOString().split("T")[0],
        donor: "Hamba Allah",
        amount: "",
        type: "Infaq",
        notes: "",
      }
    );
    setShowModal(true);
  };

  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);
  };

  const columns = [
    { header: "Tanggal", accessor: "date" },
    { header: "Donatur", accessor: "donor" },
    {
      header: "Jumlah",
      accessor: "amount",
      render: (row) => (
        <span className="fw-bold text-success">{formatRupiah(row.amount)}</span>
      ),
    },
    {
      header: "Jenis",
      accessor: "type",
      render: (row) => <Badge bg="info">{row.type}</Badge>,
    },
    { header: "Keterangan", accessor: "notes" },
  ];

  return (
    <>
      <CrudLayout
        title="Pemasukan & Donasi"
        columns={columns}
        data={data}
        onCreate={() => openModal()}
        onEdit={(item) => openModal(item)}
        onDelete={handleDelete}
        emptyMessage="Belum ada data donasi."
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{formData.id ? "Edit" : "Catat"} Pemasukan</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                required
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nama Donatur</Form.Label>
              <Form.Control
                required
                type="text"
                value={formData.donor}
                onChange={(e) =>
                  setFormData({ ...formData, donor: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nominal (Rp)</Form.Label>
              <Form.Control
                required
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jenis</Form.Label>
              <Form.Select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option>Infaq Jumat</option>
                <option>Shodaqoh</option>
                <option>Zakat</option>
                <option>Wakaf</option>
                <option>Lainnya</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
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

export default DonationList;
