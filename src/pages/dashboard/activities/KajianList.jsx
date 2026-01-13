import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const KajianList = () => {
  const [kajianList, setKajianList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentKajian, setCurrentKajian] = useState(null); // For Edit

  // Form State
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    speaker: "",
    date: "",
    time: "",
    location: "Masjid Utama",
    image:
      "https://images.unsplash.com/photo-1584639458904-4c602324dc0e?auto=format&fit=crop&q=80&w=800",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("mid_kajian") || "[]");
    setKajianList(data);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      id: null,
      title: "",
      speaker: "",
      date: "",
      time: "",
      location: "Masjid Utama",
      image:
        "https://images.unsplash.com/photo-1599020111771-c9f4293910c2?w=600",
    });
  };

  const handleShow = (item = null) => {
    if (item) {
      setFormData(item);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedList = [...kajianList];

    if (formData.id) {
      // Edit
      const index = updatedList.findIndex((k) => k.id === formData.id);
      updatedList[index] = formData;
    } else {
      // Add
      const newItem = { ...formData, id: Date.now() };
      updatedList.push(newItem);
    }

    localStorage.setItem("mid_kajian", JSON.stringify(updatedList));
    setKajianList(updatedList);
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus kegiatan ini?")) {
      const updatedList = kajianList.filter((k) => k.id !== id);
      localStorage.setItem("mid_kajian", JSON.stringify(updatedList));
      setKajianList(updatedList);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Jadwal Kajian</h2>
        <Button variant="success" onClick={() => handleShow()}>
          <FaPlus className="me-2" /> Tambah Kajian
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th className="border-0">Tema / Judul</th>
                <th className="border-0">Pemateri</th>
                <th className="border-0">Waktu</th>
                <th className="border-0">Lokasi</th>
                <th className="border-0 text-end">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kajianList.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">
                    Belum ada data kajian. Silakan tambah baru.
                  </td>
                </tr>
              ) : (
                kajianList.map((item) => (
                  <tr key={item.id}>
                    <td className="align-middle fw-bold">{item.title}</td>
                    <td className="align-middle">{item.speaker}</td>
                    <td className="align-middle">
                      <div>{item.date}</div>
                      <small className="text-muted">{item.time}</small>
                    </td>
                    <td className="align-middle">{item.location}</td>
                    <td className="align-middle text-end">
                      <Button
                        variant="link"
                        className="text-warning p-0 me-3"
                        onClick={() => handleShow(item)}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal Form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData.id ? "Edit Kajian" : "Tambah Kajian Baru"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Judul / Tema Kajian</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Contoh: Kajian Rutin Ahad Pagi"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nama Pemateri</Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.speaker}
                onChange={(e) =>
                  setFormData({ ...formData, speaker: e.target.value })
                }
                placeholder="Contoh: Ustadz Fulan, Lc"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Jam</Form.Label>
                  <Form.Control
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Lokasi</Form.Label>
              <Form.Control
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Gambar (Opsional)</Form.Label>
              <Form.Control
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="https://..."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="success" type="submit">
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default KajianList;
