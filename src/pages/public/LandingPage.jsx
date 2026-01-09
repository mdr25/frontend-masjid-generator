import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaList, FaImages, FaNewspaper, FaPhone, FaUsers, FaInstagram, FaClock, FaDatabase } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="bg-white">
            {/* Navbar */}
            <Navbar expand="lg" className="py-3 bg-white fixed-top shadow-sm">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
                        <span className="text-primary me-2 fs-2">
                             {/* Icon placeholder if Image not loaded */}
                            <FaHome />
                        </span>
                        <div>
                            <div className="lh-1 fs-5 fw-bold text-success">Masjid</div>
                            <div className="lh-1 fs-6 fw-bold text-dark">Indonesia</div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-uppercase fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                            <Nav.Link href="#home" className="text-dark">Beranda</Nav.Link>
                            <Nav.Link href="#about" className="text-dark">Tentang Kami</Nav.Link>
                            <Nav.Link href="#donate" className="text-dark">Donasi</Nav.Link>
                            <Nav.Link href="#contact" className="text-dark">Kontak</Nav.Link>
                        </Nav>
                        <Button as={Link} to="/login" variant="success" className="ms-3 rounded-0 px-4 fw-bold" style={{ backgroundColor: '#215E4C' }}>
                            Masuk
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <header className="pt-5" style={{ marginTop: '76px' }}>
                <Container className="py-5">
                    <Card className="border-0 text-white overflow-hidden rounded-4 shadow-lg position-relative" style={{ minHeight: '400px', backgroundColor: '#215E4C' }}>
                         <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.3, background: 'url(https://images.unsplash.com/photo-1542385151-ef28badca83c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80) center/cover' }}></div>
                         <Card.ImgOverlay className="d-flex flex-column justify-content-center p-5">
                             <Row>
                                 <Col md={6}>
                                    <h1 className="fw-bold display-5 mb-3">
                                        Berdayakan Masjid, Luaskan Manfaat Kepada Ummat dengan Transformasi Digital
                                    </h1>
                                    <Button as={Link} to="/register" variant="success" size="lg" className="rounded-1 px-4 mt-3" style={{ background: '#6FBC98', border: 'none' }}>
                                        Daftar Sekarang
                                    </Button>
                                 </Col>
                             </Row>
                         </Card.ImgOverlay>
                    </Card>
                </Container>
            </header>

            {/* Stats Section */}
            <section className="py-5 bg-white">
                <Container className="text-center">
                    <h3 className="fw-bold mb-5">Tahukah Anda ?<br/><small className="fs-6 fw-normal text-muted">Berdasarkan data dari We Are Social dan katadata.co.id...</small></h3>
                    <Row className="g-4">
                        <Col md={3}>
                            <Card className="h-100 border rounded-4 p-4 shadow-sm hover-top">
                                <div className="display-4 text-dark mb-3"><FaUsers /></div>
                                <h4 className="fw-bold">205 Juta</h4>
                                <p className="text-muted small">Pengguna Internet di Indonesia</p>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 border rounded-4 p-4 shadow-sm hover-top">
                                <div className="display-4 text-dark mb-3"><FaInstagram /></div>
                                <h4 className="fw-bold">190 Juta</h4>
                                <p className="text-muted small">Orang berinteraksi dengan media sosial</p>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 border rounded-4 p-4 shadow-sm hover-top">
                                <div className="display-4 text-dark mb-3"><FaClock /></div>
                                <h4 className="fw-bold">{'>'} 8 Jam / hari</h4>
                                <p className="text-muted small">Orang Indonesia menghabiskan internet</p>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 border rounded-4 p-4 shadow-sm hover-top">
                                <div className="display-4 text-dark mb-3"><FaDatabase /></div>
                                <h4 className="fw-bold">84 %</h4>
                                <p className="text-muted small">Berusia produktif 19-54 tahun</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

             {/* Description Section */}
             <section className="py-5">
                <Container>
                    <Card className="border-0 rounded-4 text-white p-5" style={{ backgroundColor: '#2E7D5C' }}>
                        <Row className="align-items-center">
                            <Col md={5} className="text-center">
                                {/* Logo placeholder */}
                                 <div className="mb-3">
                                    <h2 className="display-1"><FaHome /></h2>
                                    <h3>Masjid Indonesia</h3>
                                    <p className="spacing-2">M A S J I D D I G I T A L</p>
                                </div>
                            </Col>
                            <Col md={7}>
                                <h2 className="fw-bold mb-3">Apa itu Masjid Indonesia?</h2>
                                <p className="lead fs-6">
                                    Sebuah platform Aplikasi berbasis Web yang berfokus pada pengembangan ekosistem masjid berbasis digital. Berkomitmen untuk meningkatkan peran masjid sebagai pilar peradaban islam melalui transformasi digital.
                                </p>
                                <p className="fs-6">
                                    Masjid Indonesia mengajak para pengurus dan takmir masjid untuk tumbuh dan berkembang bersama meningkatkan manfaat kepada ummat serta memperluas jangkauan dakwah masjid ke seluruh Indonesia.
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>

             {/* Menu Grid Section */}
             <section className="py-5 bg-light">
                <Container className="text-center">
                    <h2 className="fw-bold mb-5">Menu Kami</h2>
                    <Row className="g-4">
                        {[
                            { icon: <FaHome />, title: 'Beranda', desc: 'Menu Utama Website dengan berbagai macam tema yang menarik.' },
                            { icon: <FaInfoCircle />, title: 'Profil Masjid', desc: 'Menu yang berisi sejarah masjid, struktur kepengurusan, dan visi misi masjid' },
                            { icon: <FaList />, title: 'Program', desc: 'Menu yang berisi program-program yang ada di masjid' },
                            { icon: <FaImages />, title: 'Media', desc: 'Menu untuk mengupload media digital masjid berupa gambar atau video' },
                            { icon: <FaNewspaper />, title: 'Artikel & Berita', desc: 'Menu untuk menulis sebuah artikel dan berita baik tentang masjid ataupun islam' },
                            { icon: <FaPhone />, title: 'Kontak', desc: 'Menu untuk mencantumkan nomor kontak pengelola masjid serta media sosial' },
                        ].map((item, idx) => (
                             <Col md={4} key={idx}>
                                <Card className="h-100 border-0 rounded-4 p-4 text-white" style={{ backgroundColor: '#2E7D5C' }}>
                                    <div className="display-4 mb-3">{item.icon}</div>
                                    <h4 className="fw-bold">{item.title}</h4>
                                    <p className="small opacity-75">{item.desc}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
             </section>

             {/* Footer CTA */}
             <section className="py-5 text-white position-relative overflow-hidden" style={{ backgroundColor: '#215E4C' }}>
                 <Container className="position-relative z-index-1 text-center py-5">
                    <h2 className="fw-bold mb-3">MARI BERGABUNG BERSAMA KAMI !</h2>
                    <p className="lead mb-4">Bersama meningkatkan peran masjid untuk umat dengan MasjidIndonesia.id</p>
                    <Button as={Link} to="/register" variant="outline-light" className="px-5 rounded-1">Gabung Sekarang</Button>
                 </Container>
             </section>

             {/* Footer */}
             <footer className="bg-white py-4">
                 <Container>
                     <Row className="align-items-center">
                         <Col md={4}>
                             <h5 className="fw-bold text-success">Masjid Indonesia</h5>
                             <p className="small text-muted">Platform aplikasi berbasis web yang berfokus pada pengembangan ekosistem masjid berbasis digital.</p>
                         </Col>
                         <Col md={2}>
                             <h6 className="fw-bold">Menu</h6>
                             <ul className="list-unstyled small text-muted">
                                 <li>Tentang Kami</li>
                                 <li>Donasi</li>
                                 <li>Kontak</li>
                             </ul>
                         </Col>
                         <Col md={3}>
                            <h6 className="fw-bold">Bantuan</h6>
                            <ul className="list-unstyled small text-muted">
                                <li>Syarat & Ketentuan</li>
                                <li>Kebijakan Privasi</li>
                            </ul>
                         </Col>
                         <Col md={3}>
                             <h6 className="fw-bold">Media Sosial</h6>
                             <div className="d-flex text-muted">
                                 <FaInstagram className="me-3" /> <FaHome />
                             </div>
                         </Col>
                     </Row>
                 </Container>
             </footer>

        </div>
    );
};

export default LandingPage;
