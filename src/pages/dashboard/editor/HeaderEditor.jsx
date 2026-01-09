import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col, Button, Form, Breadcrumb } from "react-bootstrap";
import { FaPen } from "react-icons/fa";

const HeaderEditor = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    menu: {
      beranda: "Beranda",
      profil: "Profil",
      program: "Program",
      artikel: "Artikel & Berita",
      galeri: "Galeri",
      kontak: "Kontak",
    },
  });

  useEffect(() => {
    const savedConfig = localStorage.getItem("mid_site_config");
    if (savedConfig) {
      const parsed = JSON.parse(savedConfig);
      if (parsed.header) {
        setConfig(parsed.header);
      }
    }
  }, []);

  const handleChange = (key, value) => {
    setConfig((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [key]: value,
      },
    }));
  };

  const handleSave = () => {
    // Merge with existing config
    const existing = JSON.parse(
      localStorage.getItem("mid_site_config") || "{}"
    );
    const updated = {
      ...existing,
      header: config,
    };
    localStorage.setItem("mid_site_config", JSON.stringify(updated));
    alert("Header updated successfully!");
    navigate("/app/editor/home");
  };

  return (
    <div>
      <div className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/app/editor/home" }}>
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Header</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit Header</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card className="shadow-sm border-0 p-4">
        <Row>
          <Col md={12} className="mb-4">
            <h5 className="fw-bold mb-4">Edit Menu Titles</h5>
          </Col>

          {Object.entries(config.menu).map(([key, value]) => (
            <Col md={6} className="mb-3" key={key}>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm="3" className="fw-bold text-capitalize">
                  Title :
                </Form.Label>
                <Col sm="9">
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                    <span className="input-group-text bg-success text-white border-success">
                      <FaPen size={12} />
                    </span>
                  </div>
                </Col>
              </Form.Group>
            </Col>
          ))}

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
              Simpan
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Visual Placeholder for layout reference */}
      <div className="mt-4 p-5 border rounded bg-white text-center">
        <img
          src="https://via.placeholder.com/150?text=Map+Placeholder"
          alt="Map"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HeaderEditor;
