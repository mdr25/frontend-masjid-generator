import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col, Button, Form, Breadcrumb } from "react-bootstrap";
import { FaPen, FaSave } from "react-icons/fa";

const HeroEditor = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    title: "Bersama Makmur dan Memakmurkan Masjid",
    subtitle: "",
    image:
      "https://images.unsplash.com/photo-1596401918338-78c66044dfb2?q=80&w=2070&auto=format&fit=crop",
  });

  useEffect(() => {
    const savedConfig = localStorage.getItem("mid_site_config");
    if (savedConfig) {
      const parsed = JSON.parse(savedConfig);
      if (parsed.hero) {
        setConfig(parsed.hero);
      }
    }
  }, []);

  const handleChange = (key, value) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    const existing = JSON.parse(
      localStorage.getItem("mid_site_config") || "{}"
    );
    const updated = {
      ...existing,
      hero: config,
    };
    localStorage.setItem("mid_site_config", JSON.stringify(updated));
    alert("Hero/Slider updated successfully!");
    navigate("/app/editor/home");
  };

  return (
    <div>
      <div className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/app/editor/home" }}>
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Slider</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit Slider</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card className="shadow-sm border-0 p-4">
        <Row>
          <Col md={12} className="mb-4">
            <h5 className="fw-bold mb-4">Edit Hero / Slider Content</h5>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Title (Heading)</Form.Label>
              <Form.Control
                type="text"
                value={config.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">
                Subtitle / Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={config.subtitle}
                onChange={(e) => handleChange("subtitle", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Hero Image URL</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  value={config.image}
                  onChange={(e) => handleChange("image", e.target.value)}
                />
                <span className="input-group-text bg-light">
                  <FaPen size={12} />
                </span>
              </div>
              <Form.Text className="text-muted">
                Paste a direct image URL (e.g. from Unsplash).
              </Form.Text>
            </Form.Group>
          </Col>

          {/* Preview Image */}
          <Col md={12} className="mb-3">
            <Form.Label className="fw-bold">Preview Image</Form.Label>
            <div
              className="rounded overflow-hidden border p-1"
              style={{ maxHeight: "300px" }}
            >
              <img
                src={config.image}
                alt="Preview"
                className="img-fluid w-100"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
          </Col>

          <Col
            md={12}
            className="mt-4 text-end d-flex justify-content-end gap-2"
          >
            <Button
              variant="secondary"
              onClick={() => navigate("/app/editor/home")}
            >
              Kembali
            </Button>
            <Button
              variant="black"
              className="bg-dark text-white border-0"
              onClick={handleSave}
            >
              <FaSave className="me-2" />
              Simpan
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default HeroEditor;
