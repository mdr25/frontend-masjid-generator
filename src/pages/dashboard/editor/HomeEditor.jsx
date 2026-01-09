import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import { FaPen, FaEye, FaArrowRight } from "react-icons/fa";

// --- Visual Blocks Components ---

const HeaderBlock = ({ data }) => {
  const menu = data?.menu || {};
  return (
    <div className="border rounded p-2 bg-white" style={{ zoom: 0.6 }}>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
        <div className="d-flex align-items-center gap-2">
          <div
            className="bg-success rounded-circle"
            style={{ width: 20, height: 20 }}
          ></div>
          <span className="fw-bold text-dark" style={{ fontSize: 12 }}>
            Logo
          </span>
        </div>
        <div className="d-flex gap-3 small text-muted">
          <span>{menu.beranda || "Beranda"}</span>
          <span>{menu.profil || "Profil"}</span>
          <span>{menu.program || "Program"}</span>
        </div>
      </div>
    </div>
  );
};

const HeroBlock = ({ data }) => {
  return (
    <div
      className="border rounded overflow-hidden position-relative bg-light"
      style={{ height: "120px" }}
    >
      {data?.image ? (
        <img
          src={data.image}
          alt="Hero"
          className="w-100 h-100"
          style={{ objectFit: "cover", opacity: 0.8 }}
        />
      ) : (
        <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center text-white">
          No Image
        </div>
      )}
      <div className="position-absolute top-50 start-50 translate-middle text-center w-100 p-2">
        <h6
          className="fw-bold text-white text-shadow mb-1"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
          {data?.title || "Judul Hero"}
        </h6>
        <small
          className="text-white text-shadow"
          style={{ fontSize: 10, textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
          {data?.subtitle || "Subtitle Hero..."}
        </small>
      </div>
    </div>
  );
};

const FooterBlock = ({ data }) => {
  return (
    <div
      className="border rounded p-3 bg-dark text-white text-center"
      style={{ zoom: 0.7 }}
    >
      <h6 className="fw-bold mb-2">Nama Masjid</h6>
      <div className="d-flex justify-content-center gap-2 mb-2 opacity-50">
        <div
          className="bg-secondary rounded-circle"
          style={{ width: 15, height: 15 }}
        ></div>
        <div
          className="bg-secondary rounded-circle"
          style={{ width: 15, height: 15 }}
        ></div>
        <div
          className="bg-secondary rounded-circle"
          style={{ width: 15, height: 15 }}
        ></div>
      </div>
      <small className="text-white-50" style={{ fontSize: 10 }}>
        {data?.copyrightText || "Copyright..."}
      </small>
    </div>
  );
};

// --- Main Editor Component ---

const HomeEditor = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    const savedConfig = localStorage.getItem("mid_site_config");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const sections = [
    {
      id: "header",
      title: "Navigation Bar (Header)",
      description: "Atur logo dan judul menu navigasi.",
      component: <HeaderBlock data={config.header} />,
      link: "/app/editor/home/header",
      status: "Active",
    },
    {
      id: "slider",
      title: "Hero Section / Slider",
      description: "Gambar utama, judul besar, dan pesan penyambut.",
      component: <HeroBlock data={config.hero} />,
      link: "/app/editor/home/slider",
      status: "Active",
    },
    {
      id: "footer",
      title: "Footer & Social Media",
      description: "Link sosial media dan informasi hak cipta.",
      component: <FooterBlock data={config.footer} />,
      link: "/app/editor/home/footer",
      status: "Active",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Visual Editor</h2>
          <p className="text-muted mb-0">
            Atur tampilan beranda website Anda secara visual.
          </p>
        </div>
        <Button
          variant="outline-primary"
          as={Link}
          to="/website"
          target="_blank"
        >
          <FaEye className="me-2" /> Live Preview
        </Button>
      </div>

      <Row className="g-4">
        {sections.map((section) => (
          <Col md={6} lg={4} key={section.id}>
            <Card className="h-100 shadow-sm border-0 d-flex flex-column hover-shadow transition-all">
              <Card.Header className="bg-white border-bottom-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="fw-bold mb-1">{section.title}</h5>
                  <small className="text-muted">{section.description}</small>
                </div>
                {/* <Badge bg="success" className="rounded-pill px-3">Active</Badge> */}
              </Card.Header>

              <Card.Body className="p-4 flex-grow-1">
                {/* Visual Preview Container */}
                <div
                  className="bg-light rounded p-2 border mb-3 position-relative overflow-hidden"
                  style={{
                    minHeight: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="w-100">{section.component}</div>
                </div>
              </Card.Body>

              <Card.Footer className="bg-white border-top-0 px-4 pb-4 pt-0">
                <Button
                  as={Link}
                  to={section.link}
                  variant="black"
                  className="w-100 py-2 d-flex align-items-center justify-content-center"
                >
                  <FaPen className="me-2" size={14} /> Edit{" "}
                  {section.title.split(" ")[0]}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <style>
        {`
            .hover-shadow:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            }
            .transition-all {
                transition: all 0.3s ease;
            }
        `}
      </style>
    </div>
  );
};

export default HomeEditor;
