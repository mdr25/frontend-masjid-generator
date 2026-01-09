import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

const Step1Domain = ({ data, updateData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="text-center py-5">
      <h4 className="mb-4">Tentukan nama domain / subdomain website anda</h4>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-4" size="lg">
              <Form.Control
                placeholder="Masukan Nama Masjid"
                value={data.domain}
                onChange={(e) => updateData("domain", e.target.value)}
                required
              />
              <InputGroup.Text className="bg-success text-white border-success">
                masjidindonesia.com
              </InputGroup.Text>
            </InputGroup>

            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="success"
                size="lg"
                className="px-5"
                style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
              >
                Cek Domain
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="px-5 bg-secondary-subtle text-dark border-0"
                disabled={!data.domain}
                onClick={onNext}
              >
                Selanjutnya
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Step1Domain;
