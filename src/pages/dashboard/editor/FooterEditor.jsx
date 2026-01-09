import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Breadcrumb,
  InputGroup,
} from "react-bootstrap";
import {
  FaPen,
  FaSave,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const FooterEditor = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    social: {
      facebook: "",
      twitter: "",
      instagram: "",
      youtube: "",
    },
    copyrightText: "",
  });

  useEffect(() => {
    const savedConfig = localStorage.getItem("mid_site_config");
    if (savedConfig) {
      const parsed = JSON.parse(savedConfig);
      if (parsed.footer) {
        setConfig(parsed.footer);
      }
    }
  }, []);

  const handleChange = (key, value) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSocialChange = (platform, value) => {
    setConfig((prev) => ({
      ...prev,
      social: {
        ...prev.social,
        [platform]: value,
      },
    }));
  };

  const handleSave = () => {
    const existing = JSON.parse(
      localStorage.getItem("mid_site_config") || "{}"
    );
    const updated = {
      ...existing,
      footer: config,
    };
    localStorage.setItem("mid_site_config", JSON.stringify(updated));
    alert("Footer updated successfully!");
    navigate("/app/editor/home");
  };

  return (
    <div>
      <div className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/app/editor/home" }}>
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Footer</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit Footer</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card className="shadow-sm border-0 p-4">
        <Row>
          <Col md={12} className="mb-4">
            <h5 className="fw-bold mb-4">Edit Footer Content</h5>
          </Col>

          <Col md={12} className="mb-4">
            <h6 className="fw-bold mb-3">Social Media Links</h6>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaFacebook />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Facebook URL"
                  value={config.social?.facebook || ""}
                  onChange={(e) =>
                    handleSocialChange("facebook", e.target.value)
                  }
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaTwitter />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Twitter URL"
                  value={config.social?.twitter || ""}
                  onChange={(e) =>
                    handleSocialChange("twitter", e.target.value)
                  }
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaInstagram />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Instagram URL"
                  value={config.social?.instagram || ""}
                  onChange={(e) =>
                    handleSocialChange("instagram", e.target.value)
                  }
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaYoutube />
                </InputGroup.Text>
                <Form.Control
                  placeholder="YouTube URL"
                  value={config.social?.youtube || ""}
                  onChange={(e) =>
                    handleSocialChange("youtube", e.target.value)
                  }
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">
                Copyright Override (Optional)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Leave empty to use Profile Name"
                value={config.copyrightText}
                onChange={(e) => handleChange("copyrightText", e.target.value)}
              />
              <Form.Text className="text-muted">
                e.g. "© 2024 Yayasan Masjid..."
              </Form.Text>
            </Form.Group>
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

export default FooterEditor;
