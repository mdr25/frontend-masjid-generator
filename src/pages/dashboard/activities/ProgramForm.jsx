import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSave, FaArrowLeft, FaImage } from "react-icons/fa";

const ProgramForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    content: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (id) {
      const programs = JSON.parse(localStorage.getItem("mid_programs") || "[]");
      const program = programs.find((p) => p.id === parseInt(id));
      if (program) {
        setFormData(program);
        setPreviewImage(program.image);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "image") {
      setPreviewImage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const programs = JSON.parse(localStorage.getItem("mid_programs") || "[]");

    if (id) {
      // Edit
      const index = programs.findIndex((p) => p.id === parseInt(id));
      if (index !== -1) {
        programs[index] = { ...formData, id: parseInt(id) };
      }
    } else {
      // Add
      const newProgram = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      programs.push(newProgram);
    }

    localStorage.setItem("mid_programs", JSON.stringify(programs));
    navigate("/app/activities/program");
  };

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            {id ? "Edit Program" : "Tambah Program"}
          </h2>
          <p className="text-muted mb-0">
            {id
              ? "Perbarui informasi program."
              : "Buat program baru untuk masjid."}
          </p>
        </div>
        <Button variant="light" onClick={() => navigate(-1)} className="border">
          <FaArrowLeft className="me-2" /> Kembali
        </Button>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="g-4">
          <Col lg={8}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body className="p-4">
                <h5
                  className="fw-bold mb-4 text-success border-bottom pb-2"
                  style={{ color: "#1B4D3E" }}
                >
                  Informasi Program
                </h5>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Nama Program</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Contoh: Pesantren Kilat Ramadhan"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Link URL (Opsional)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="link"
                    placeholder="https://..."
                    value={formData.link}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                  <Form.Text className="text-muted">
                    Link internal atau eksternal untuk detail program.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Isi / Deskripsi
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    placeholder="Jelaskan detail program di sini..."
                    value={formData.content}
                    onChange={handleChange}
                    className="bg-light border-0"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body className="p-4">
                <h5
                  className="fw-bold mb-4 text-success border-bottom pb-2"
                  style={{ color: "#1B4D3E" }}
                >
                  Media
                </h5>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">URL Gambar</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="https://..."
                    value={formData.image}
                    onChange={handleChange}
                    className="py-2 bg-light border-0 mb-3"
                  />
                  <div
                    className="bg-light rounded d-flex align-items-center justify-content-center border"
                    style={{ height: 200, overflow: "hidden" }}
                  >
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    ) : (
                      <div className="text-center text-muted">
                        <FaImage size={32} className="mb-2" />
                        <div className="small">Preview Gambar</div>
                      </div>
                    )}
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>

            <div className="d-grid gap-2">
              <Button
                variant="success"
                type="submit"
                size="lg"
                className="fw-bold"
              >
                <FaSave className="me-2" /> Simpan Program
              </Button>
              <Button variant="outline-secondar" onClick={() => navigate(-1)}>
                Batal
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProgramForm;
