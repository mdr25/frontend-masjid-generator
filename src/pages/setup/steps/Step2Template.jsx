import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const templates = [
  {
    id: "template-1",
    name: "1. Green Islamic Website",
    desc: "Warna hijau yang menyegarkan",
    image: "https://via.placeholder.com/300x150?text=Green+Design",
  }, // Placeholder for now or use one from assets
  {
    id: "template-2",
    name: "2. Dark Design Website",
    desc: "Desain dengan warna gelap",
    image: "https://via.placeholder.com/300x150/000000/FFFFFF?text=Dark+Design",
  },
  {
    id: "template-3",
    name: "3. Simple Design",
    desc: "Desain Simple untuk Masjid Anda",
    image:
      "https://via.placeholder.com/300x150/f0f0f0/333333?text=Simple+Design",
  },
  {
    id: "template-4",
    name: "4. Blue Design",
    desc: "Lorem ipsum doler amet",
    image: "https://via.placeholder.com/300x150/0000FF/FFFFFF?text=Blue+Design",
  },
];

const Step2Template = ({ data, updateData, onNext, onBack }) => {
  return (
    <div>
      <h4 className="text-center mb-5">Pilih Template Desain</h4>
      <Row className="g-4">
        {templates.map((t) => (
          <Col md={3} key={t.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h6 className="fw-bold mb-3">{t.name}</h6>
                <div className="bg-light mb-3 rounded overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-100" />
                </div>
                <p className="small text-muted mb-3">{t.desc}</p>
                <div className="d-grid gap-2 d-md-flex">
                  <Button
                    variant="success"
                    className="flex-fill"
                    style={{
                      backgroundColor: "#6cbb95",
                      borderColor: "#6cbb95",
                    }}
                  >
                    Lihat
                  </Button>
                  <Button
                    variant={data.templateId === t.id ? "success" : "success"}
                    className="flex-fill"
                    style={{
                      backgroundColor:
                        data.templateId === t.id ? "#4a9c7b" : "#6cbb95",
                      borderColor: "#6cbb95",
                      opacity: data.templateId === t.id ? 1 : 0.7,
                    }}
                    onClick={() => {
                      updateData("templateId", t.id);
                      onNext();
                    }}
                  >
                    Pilih
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Step2Template;
