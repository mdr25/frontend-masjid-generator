import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowRight,
  FaMosque,
} from "react-icons/fa";

// Template 1 Design - "Earthy Modern"
const Template1 = ({ data }) => {
  // Default Data
  const profile = data?.profile || {
    name: "Masjid Ibnu Sina",
    address: "Kota Baru, Indonesia",
  };
  const prayer = data?.prayer || {
    fajr: "04:30",
    dhuhr: "12:00",
    asr: "15:15",
    maghrib: "18:00",
    isha: "19:15",
  };

  const menu = data?.header?.menu || {
    beranda: "Beranda",
    profil: "Profil",
    program: "Program",
    artikel: "Artikel & Berita",
    galeri: "Galeri",
    kontak: "Kontak",
  };

  // Mock Data to match reference if not provided
  const articles =
    data?.articles?.length > 0
      ? data.articles
      : [
          {
            id: 1,
            title: "Menyambut Ramadhan 1444 H, Tinggal 30 hari!",
            summary: "Persiapan menyambut bulan suci penuh berkah.",
            date: "30 Mar 2023",
            image:
              "https://images.unsplash.com/photo-1561314945-0562f5b6d2c6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            title: "Menyambut Ramadhan 1444 H, Tinggal 30 hari!",
            summary: "Persiapan menyambut bulan suci penuh berkah.",
            date: "15 Apr 2023",
            image:
              "https://images.unsplash.com/photo-1636985418926-6752c84bf50a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ];

  const programs =
    data?.programs?.length > 0
      ? data.programs
      : [
          {
            id: 1,
            title: "TPQ Ibnu Sina",
            image:
              "https://images.unsplash.com/photo-1712249239167-18cb9e056ee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            title: "Ngaji Ahad Pagi",
            image:
              "https://images.unsplash.com/photo-1547119846-7d4039e02077?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 3,
            title: "Wakaf",
            image:
              "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
          },
          {
            id: 4,
            title: "Tahsin Al-Qur'an",
            image:
              "https://images.unsplash.com/photo-1649030839339-3d117544fcb4?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ];

  // Custom Colors
  const colors = {
    primary: "#43A047", // Green
    secondary: "#F0AD4E", // Orange/Gold
    bgCream: "#FFF8E7", // Cream background
    textDark: "#333",
    textMuted: "#666",
  };

  return (
    <div className="font-sans" style={{ backgroundColor: "#fff" }}>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="py-3 sticky-top border-bottom">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <div
              className="bg-success rounded-circle me-2 d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: 40, height: 40 }}
            >
              <FaMosque size={20} />
            </div>
            <div className="lh-1">
              <h6 className="mb-0 fw-bold">{profile.name}</h6>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto small fw-bold text-uppercase gap-3">
              <Nav.Link href="#home" className="text-dark">
                {menu.beranda}
              </Nav.Link>
              <Nav.Link href="#profil" className="text-dark">
                {menu.profil}
              </Nav.Link>
              <Nav.Link href="#program" className="text-dark">
                {menu.program}
              </Nav.Link>
              <Nav.Link href="#artikel" className="text-dark">
                {menu.artikel}
              </Nav.Link>
              <Nav.Link href="#galeri" className="text-dark">
                {menu.galeri}
              </Nav.Link>
              <Nav.Link href="#kontak" className="text-dark">
                {menu.kontak}
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              <Button
                size="sm"
                style={{
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                }}
                className="px-3 rounded-0"
              >
                Masuk
              </Button>
              <Button
                size="sm"
                style={{
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                }}
                className="px-3 rounded-0"
              >
                Donasi
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <header
        className="position-relative pt-5 pb-0"
        style={{ backgroundColor: colors.bgCream }}
      >
        <Container className="pt-5 pb-5">
          <Row className="align-items-center">
            <Col md={6} className="mb-5 mb-md-0 position-relative z-1">
              <h1
                className="display-4 fw-bold mb-4"
                style={{ color: "#333", lineHeight: 1.2 }}
              >
                {data?.hero?.title || "Bersama Makmur dan Memakmurkan Masjid"}
              </h1>
              {data?.hero?.subtitle && (
                <p className="lead text-muted mb-4">{data.hero.subtitle}</p>
              )}
            </Col>
            {/* Masjid Illustration/Image - Absolute positioned in large screens */}
            <Col md={6} className="text-end position-relative">
              <img
                src={
                  data?.hero?.image ||
                  "https://images.unsplash.com/photo-1560626184-524744344bef?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Masjid Hero"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  objectFit: "cover",
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </Col>
          </Row>
        </Container>

        {/* Prayer Schedule Bar - Overlapping Hero */}
        <div
          className="position-relative start-0 w-100"
          style={{ bottom: "20px", zIndex: 10 }}
        >
          <Container>
            <Card
              className="border-0 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              <Card.Body className="p-0">
                <Row className="g-0 text-center">
                  <Col
                    md={3}
                    className="bg-light p-3 d-flex align-items-center justify-content-center border-end"
                  >
                    <div className="d-flex align-items-center gap-3">
                      {/* Mock User/Imam */}
                      <div
                        className="bg-secondary rounded-circle"
                        style={{ width: 40, height: 40 }}
                      ></div>
                      <div className="text-start lh-1">
                        <small
                          className="d-block text-muted"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Imam Sholat
                        </small>
                        <strong style={{ fontSize: "0.8rem" }}>
                          Ust. Fulan Fulani
                        </strong>
                      </div>
                    </div>
                  </Col>
                  <Col className="p-3">
                    <div className="d-flex justify-content-between align-items-center px-4">
                      {Object.entries(prayer).map(([key, val]) => (
                        <div key={key} className="text-center">
                          <small
                            className="d-block text-muted text-uppercase fw-bold mb-1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {key}
                          </small>
                          <h5 className="mb-0 fw-bold">{val}</h5>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </header>

      {/* Profil Section */}
      <section id="profil" className="py-5 bg-white">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="position-relative">
                <img
                  src={
                    data?.profile?.image ||
                    "https://images.unsplash.com/flagged/photo-1554398912-87ad6a73dbb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="img-fluid rounded-3"
                  alt="Profil"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col md={6} className="ps-md-5">
              <h2 className="fw-bold mb-4">Profil</h2>
              <div className="mb-4 text-secondary" style={{ lineHeight: 1.8 }}>
                {data?.profile?.about ? (
                  data.profile.about
                    .split("\n")
                    .map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>
                    Masjid {data?.profile?.name || "Kami"} adalah pusat
                    peribadatan dan kegiatan umat Islam yang berkomitmen
                    melayani jamaah dengan sebaik-baiknya.
                  </p>
                )}
              </div>

              {data?.profile?.visiMisi && (
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Visi & Misi</h5>
                  <div className="text-secondary" style={{ lineHeight: 1.8 }}>
                    {data.profile.visiMisi.split("\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}
              <div className="text-end">
                <Button
                  className="text-white border-0 px-4 rounded-pill fw-bold"
                  style={{ backgroundColor: colors.secondary }}
                >
                  Selengkapnya
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-5">Program</h2>
          <Row className="g-4">
            {programs.map((prog, idx) => (
              <Col md={6} key={idx}>
                <div
                  className="position-relative overflow-hidden rounded bg-light user-select-none"
                  style={{ height: "220px" }}
                >
                  <img
                    src={prog.image}
                    className="w-100 h-100"
                    style={{ objectFit: "cover", filter: "brightness(0.8)" }}
                    alt={prog.title}
                  />
                  <div className="position-absolute top-0 start-0 p-4">
                    <h3 className="fw-bold text-white">{prog.title}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button
              className="text-white border-0 px-5 rounded-pill fw-bold"
              style={{ backgroundColor: colors.secondary }}
            >
              Lainnya
            </Button>
          </div>
        </Container>
      </section>

      {/* Articles Section */}
      <section id="artikel" className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-5">Artikel & Berita</h2>
          <Row className="g-4">
            {articles.map((item, idx) => (
              <Col lg={6} key={idx}>
                <Card className="border-0 h-100">
                  <div className="row g-0 align-items-center h-100">
                    <div className="col-md-12 mb-3">
                      <div
                        className="rounded overflow-hidden"
                        style={{ height: "250px" }}
                      >
                        <img
                          src={item.image}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="px-2">
                        <h4 className="fw-bold mb-2">{item.title}</h4>
                        <p
                          className="text-muted mb-3"
                          style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                        >
                          {item.summary}
                        </p>
                        <Button
                          size="sm"
                          className="text-white border-0 px-4 py-2 rounded-0 fw-bold d-inline-flex align-items-center gap-2"
                          style={{ backgroundColor: "#B8860B" }}
                        >
                          READ MORE <FaArrowRight size={12} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button
              className="text-white border-0 px-5 rounded-pill fw-bold"
              style={{ backgroundColor: colors.secondary }}
            >
              Lainnya
            </Button>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-5">Galeri</h2>
          <Row className="g-4">
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1683828936769-92c51298885c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
                alt=""
              />
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1684502843929-14da5854c60d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
                alt=""
              />
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1711202675990-815384b2f1fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
                alt=""
              />
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1651293478838-1f51675131c5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 rounded shadow-sm"
                style={{ height: "250px", objectFit: "cover" }}
                alt=""
              />
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button
              className="text-white border-0 px-5 rounded-pill fw-bold"
              style={{ backgroundColor: colors.secondary }}
            >
              Lainnya
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <Container className="text-center py-4">
          <div className="mb-4 d-flex justify-content-center">
            <div
              className="bg-warning p-2 rounded"
              style={{ width: 60, height: 60 }}
            >
              {/* Logo Hexagon Placeholder */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: colors.primary,
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>
          </div>
          <h4 className="fw-bold mb-4">{profile.name}</h4>
          <div className="d-flex justify-content-center gap-4 mb-5">
            {data?.footer?.social?.facebook && (
              <a
                href={data.footer.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaFacebook size={24} />
              </a>
            )}
            {data?.footer?.social?.twitter && (
              <a
                href={data.footer.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaTwitter size={24} />
              </a>
            )}
            {data?.footer?.social?.instagram && (
              <a
                href={data.footer.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaInstagram size={24} />
              </a>
            )}
            {data?.footer?.social?.youtube && (
              <a
                href={data.footer.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaYoutube size={24} />
              </a>
            )}
          </div>
          <hr className="border-secondary mb-3" />
          <p className="small text-white-50">
            {data?.footer?.copyrightText || `@ 2026 ${profile.name}`}
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Template1;
