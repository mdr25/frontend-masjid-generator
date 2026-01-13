import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Modal, Form, Nav } from "react-bootstrap";
import { FaPlus, FaTrash, FaImage, FaVideo } from "react-icons/fa";

const GalleryList = () => {
  const [activeTab, setActiveTab] = useState("foto"); // foto | video
  const [mediaList, setMediaList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMedia, setNewMedia] = useState({
    url: "",
    caption: "",
    type: "foto",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mid_gallery") || "[]");
    if (stored.length === 0) {
      const seeds = [
        {
          id: 1,
          type: "foto",
          url: "https://images.unsplash.com/photo-1560626184-524744344bef?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Masjid Raya",
        },
        {
          id: 2,
          type: "foto",
          url: "https://images.unsplash.com/photo-1547119846-7d4039e02077?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Kegiatan Mengaji",
        },
      ];
      setMediaList(seeds);
      localStorage.setItem("mid_gallery", JSON.stringify(seeds));
    } else {
      setMediaList(stored);
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const payload = {
      id: Date.now(),
      ...newMedia,
      type: activeTab, // Force type to current tab
      date: new Date().toISOString(),
    };
    const updated = [...mediaList, payload];
    setMediaList(updated);
    localStorage.setItem("mid_gallery", JSON.stringify(updated));
    setShowModal(false);
    setNewMedia({ url: "", caption: "", type: "foto" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus item ini?")) {
      const updated = mediaList.filter((m) => m.id !== id);
      setMediaList(updated);
      localStorage.setItem("mid_gallery", JSON.stringify(updated));
    }
  };

  const filteredMedia = mediaList.filter((m) => m.type === activeTab);

  return (
    <div>
      {/* Header & Tabs */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-3">
          <Button
            variant={activeTab === "foto" ? "success" : "light"}
            className={`px-4 fw-bold ${
              activeTab === "foto" ? "" : "text-success"
            }`}
            style={{
              minWidth: 120,
              backgroundColor: activeTab === "foto" ? "#1B4D3E" : "#E8F5E9",
              borderColor: activeTab === "foto" ? "#1B4D3E" : "transparent",
            }}
            onClick={() => setActiveTab("foto")}
          >
            Foto
          </Button>
          <Button
            variant={activeTab === "video" ? "success" : "light"}
            className={`px-4 fw-bold ${
              activeTab === "video" ? "" : "text-success"
            }`}
            style={{
              minWidth: 120,
              backgroundColor: activeTab === "video" ? "#1B4D3E" : "#E8F5E9",
              borderColor: activeTab === "video" ? "#1B4D3E" : "transparent",
            }}
            onClick={() => setActiveTab("video")}
          >
            Video
          </Button>
        </div>
        <div className="text-muted d-none d-md-block">
          Media &raquo; Data {activeTab === "foto" ? "Gambar" : "Video"}
        </div>
      </div>

      <Card className="shadow-sm border-0" style={{ minHeight: 400 }}>
        <Card.Body className="p-4">
          {filteredMedia.length === 0 ? (
            /* Empty State */
            <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5">
              <h4 className="fw-bold mb-3">
                Upload {activeTab === "foto" ? "Foto" : "Video"}
              </h4>
              <Button
                variant="success"
                style={{ backgroundColor: "#1B4D3E", borderColor: "#1B4D3E" }}
                className="px-5 py-2"
                onClick={() => setShowModal(true)}
              >
                Tambah
              </Button>
            </div>
          ) : (
            /* Grid View */
            <>
              <div className="d-flex justify-content-between mb-4">
                <h5
                  className="fw-bold text-success"
                  style={{ color: "#1B4D3E" }}
                >
                  Galeri {activeTab === "foto" ? "Foto" : "Video"}
                </h5>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => setShowModal(true)}
                  style={{ backgroundColor: "#1B4D3E", borderColor: "#1B4D3E" }}
                >
                  <FaPlus className="me-2" /> Tambah Baru
                </Button>
              </div>
              <Row className="g-4">
                {filteredMedia.map((item) => (
                  <Col md={3} key={item.id}>
                    <Card className="h-100 border-0 shadow-sm overflow-hidden group-hover-action">
                      <div
                        className="position-relative"
                        style={{ height: 180 }}
                      >
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-100 h-100 object-fit-cover"
                          onError={(e) =>
                            (e.target.src =
                              "https://via.placeholder.com/300?text=Error")
                          }
                        />
                        <div className="position-absolute top-0 end-0 p-2">
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                        {item.type === "video" && (
                          <div className="position-absolute top-50 start-50 translate-middle text-white">
                            <FaVideo size={32} />
                          </div>
                        )}
                      </div>
                      <Card.Body className="p-3">
                        <p className="card-text small mb-0 text-truncate">
                          {item.caption || "Tanpa Keterangan"}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Card.Body>
      </Card>

      {/* Modal Add */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Tambah {activeTab === "foto" ? "Foto" : "Video"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                URL {activeTab === "foto" ? "Gambar" : "Video"}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  activeTab === "foto"
                    ? "https://..."
                    : "Link YouTube / Video URL"
                }
                value={newMedia.url}
                onChange={(e) =>
                  setNewMedia({ ...newMedia, url: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan / Caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Kegiatan Jumat Berkah"
                value={newMedia.caption}
                onChange={(e) =>
                  setNewMedia({ ...newMedia, caption: e.target.value })
                }
              />
            </Form.Group>
            {/* Preview */}
            {newMedia.url && activeTab === "foto" && (
              <div
                className="mb-3 rounded overflow-hidden border"
                style={{ height: 150 }}
              >
                <img
                  src={newMedia.url}
                  alt="Preview"
                  className="w-100 h-100 object-fit-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            )}
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

export default GalleryList;
