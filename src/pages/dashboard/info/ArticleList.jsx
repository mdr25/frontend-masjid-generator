import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Table,
  Badge,
} from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit, FaCalendarAlt } from "react-icons/fa";

const ArticleList = () => {
  const [activeTab, setActiveTab] = useState("artikel"); // artikel | berita
  const [dataList, setDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category: "artikel", // artikel | berita
    date: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mid_articles") || "[]");
    setDataList(stored);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    let updated = [...dataList];
    const payload = {
      ...formData,
      category: activeTab, // Force category to current tab
      id: formData.id || Date.now(),
      date: formData.date || new Date().toISOString().split("T")[0],
    };

    if (formData.id) {
      const idx = updated.findIndex((x) => x.id === formData.id);
      if (idx !== -1) updated[idx] = payload;
    } else {
      updated.push(payload);
    }

    localStorage.setItem("mid_articles", JSON.stringify(updated));
    setDataList(updated);
    setShowModal(false);
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus item ini?")) {
      const updated = dataList.filter((x) => x.id !== id);
      setDataList(updated);
      localStorage.setItem("mid_articles", JSON.stringify(updated));
    }
  };

  const resetForm = () => {
    setFormData({
      id: null,
      title: "",
      category: activeTab,
      date: "",
      content: "",
      image: "",
    });
  };

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const filteredData = dataList.filter(
    (x) => (x.category || "artikel") === activeTab
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Upload Artikel & Berita Seputar Masjid</h2>

        <div className="d-flex gap-3">
          <Button
            variant={activeTab === "artikel" ? "success" : "light"}
            className={`px-4 fw-bold ${
              activeTab === "artikel" ? "" : "text-success"
            }`}
            style={{
              minWidth: 120,
              backgroundColor: activeTab === "artikel" ? "#1B4D3E" : "#E8F5E9",
              borderColor: activeTab === "artikel" ? "#1B4D3E" : "transparent",
            }}
            onClick={() => setActiveTab("artikel")}
          >
            Artikel
          </Button>
          <Button
            variant={activeTab === "berita" ? "success" : "light"}
            className={`px-4 fw-bold ${
              activeTab === "berita" ? "" : "text-success"
            }`}
            style={{
              minWidth: 120,
              backgroundColor: activeTab === "berita" ? "#1B4D3E" : "#E8F5E9",
              borderColor: activeTab === "berita" ? "#1B4D3E" : "transparent",
            }}
            onClick={() => setActiveTab("berita")}
          >
            Berita
          </Button>
        </div>
      </div>

      <Card className="shadow-sm border-0" style={{ minHeight: 400 }}>
        <Card.Body className="p-4">
          <div className="mb-4">
            <Button
              variant="success"
              style={{ backgroundColor: "#1B4D3E", borderColor: "#1B4D3E" }}
              onClick={() => openModal()}
            >
              Tambah {activeTab === "artikel" ? "Artikel" : "Berita"}
            </Button>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <p>Belum ada {activeTab} yang diupload.</p>
            </div>
          ) : (
            <Table hover responsive className="align-middle">
              <thead className="bg-light">
                <tr>
                  <th className="border-0 ps-3">Judul</th>
                  <th className="border-0">Tanggal</th>
                  <th className="border-0">Preview</th>
                  <th className="border-0 text-end pe-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="ps-3 fw-bold">{item.title}</td>
                    <td>
                      <div className="d-flex align-items-center text-muted small">
                        <FaCalendarAlt className="me-2" /> {item.date}
                      </div>
                    </td>
                    <td>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="thumb"
                          className="rounded"
                          style={{ width: 40, height: 40, objectFit: "cover" }}
                        />
                      ) : (
                        <span className="text-muted small">-</span>
                      )}
                    </td>
                    <td className="text-end pe-3">
                      <Button
                        variant="link"
                        className="text-dark p-0 me-3"
                        onClick={() => openModal(item)}
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
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Modal Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {formData.id ? "Edit" : "Tambah"}{" "}
            {activeTab === "artikel" ? "Artikel" : "Berita"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                Judul {activeTab === "artikel" ? "Artikel" : "Berita"}
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Masukkan judul..."
              />
            </Form.Group>
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
            <Form.Group className="mb-3">
              <Form.Label>URL Gambar Utama</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://..."
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Isi Konten</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                required
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="Tulis konten di sini..."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button
              variant="success"
              type="submit"
              style={{ backgroundColor: "#1B4D3E", borderColor: "#1B4D3E" }}
            >
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ArticleList;
