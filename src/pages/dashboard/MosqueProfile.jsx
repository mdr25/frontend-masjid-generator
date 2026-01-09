import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert,
  FloatingLabel,
} from "react-bootstrap";
import { authService } from "../../services/apiClient";
import { FaSave, FaMosque } from "react-icons/fa";

const MosqueProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    about: "", // Tentang Masjid
    visiMisi: "",
    contact: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      const profiles = JSON.parse(localStorage.getItem("mid_profiles") || "[]");
      const profile = profiles.find((p) => p.userId === user.id);
      if (profile) {
        // Merge with default structure to ensure all fields exist
        setFormData((prev) => ({ ...prev, ...profile }));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authService.getCurrentUser();
    const profiles = JSON.parse(localStorage.getItem("mid_profiles") || "[]");
    const index = profiles.findIndex((p) => p.userId === user.id);

    const updatedProfile = { ...formData, userId: user.id };

    if (index !== -1) {
      profiles[index] = updatedProfile;
    } else {
      profiles.push(updatedProfile);
    }

    localStorage.setItem("mid_profiles", JSON.stringify(profiles));
    setMessage("Profil berhasil disimpan!");

    // Hide alert after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Profil Masjid</h2>
          <p className="text-muted mb-0">
            Kelola informasi dasar dan detail masjid Anda.
          </p>
        </div>
        <Button
          variant="dark"
          onClick={handleSubmit}
          className="px-4 d-flex align-items-center"
        >
          <FaSave className="me-2" /> Simpan Perubahan
        </Button>
      </div>

      {message && (
        <Alert variant="success" className="mb-4 shadow-sm border-0">
          {message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Card className="shadow-sm border-0 mb-4">
          <Card.Body className="p-4">
            <h5
              className="fw-bold mb-4 text-success border-bottom pb-2"
              style={{ color: "#1B4D3E" }}
            >
              Informasi Umum
            </h5>
            <Row className="g-4">
              {/* Left Column */}
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Nama Masjid</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Contoh: Masjid Al-Furqon"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    URL Foto Masjid
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="https://example.com/foto-masjid.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    className="py-2 bg-light border-0 mb-2"
                  />
                  {formData.image && (
                    <div
                      className="rounded overflow-hidden border"
                      style={{ height: 150 }}
                    >
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Alamat Lengkap
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="address"
                    placeholder="Jalan, No. Rumah, RT/RW..."
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-light border-0"
                  />
                </Form.Group>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Kelurahan / Desa
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="kelurahan"
                    value={formData.kelurahan}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Kecamatan</Form.Label>
                  <Form.Control
                    type="text"
                    name="kecamatan"
                    value={formData.kecamatan}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Kota / Kabupaten
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleChange}
                    className="py-2 bg-light border-0"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm border-0">
          <Card.Body className="p-4">
            <h5
              className="fw-bold mb-4 text-success border-bottom pb-2"
              style={{ color: "#1B4D3E" }}
            >
              Detail Profil
            </h5>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Tentang Masjid</Form.Label>
              <Form.Text className="text-muted d-block mb-2">
                Ceritakan sejarah singkat atau deskripsi umum masjid.
              </Form.Text>
              <Form.Control
                as="textarea"
                rows={5}
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="bg-light border-0"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Visi & Misi</Form.Label>
              <Form.Text className="text-muted d-block mb-2">
                Jelaskan visi dan misi masjid untuk jamaah.
              </Form.Text>
              <Form.Control
                as="textarea"
                rows={5}
                name="visiMisi"
                value={formData.visiMisi}
                onChange={handleChange}
                className="bg-light border-0"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

export default MosqueProfile;
