import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
            {/* Hero / Header Section of Dashboard */}
            <div className="position-relative mb-4 rounded-3 overflow-hidden shadow-sm" style={{ height: '300px' }}>
                <img 
                    src="https://images.unsplash.com/photo-1564769625905-50e93615e958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mosque" 
                    className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <h2 className="text-white fw-bold">Selamat Datang, Masjid Al-Furqon</h2>
                    <p className="text-white-50">Kukusan, Beji - Kota Depok</p>
                    <Button variant="success" as={Link} to="/app/preview" className="rounded-pill px-4">
                        Lihat Website
                    </Button>
                </div>
            </div>

            {/* Quick Stats / Info */}
            <Row className="g-4">
                <Col md={3}>
                    <Card className="h-100 border-0 shadow-sm text-center p-3">
                         <h1 className="display-4 fw-bold text-primary">12</h1>
                         <p className="text-muted">Artikel & Berita</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="h-100 border-0 shadow-sm text-center p-3">
                         <h1 className="display-4 fw-bold text-primary">5</h1>
                         <p className="text-muted">Program & Kajian</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="h-100 border-0 shadow-sm text-center p-3">
                         <h1 className="display-4 fw-bold text-primary">Rp 45jt</h1>
                         <p className="text-muted">Saldo Kas</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="h-100 border-0 shadow-sm text-center p-3">
                         <h1 className="display-4 fw-bold text-primary">1</h1>
                         <p className="text-muted">Template Aktif</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardHome;
