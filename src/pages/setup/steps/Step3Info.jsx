import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Step3Info = ({ data, updateData, onNext, onBack }) => {
  const handleChange = (e) => {
    updateData("info", { ...data.info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="py-4">
      <h4 className="mb-4">Lengkapi data berikut terlebih dahulu</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Nama Masjid :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="name"
              value={data.info.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Alamat Masjid :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              value={data.info.address}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Kelurahan :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="kelurahan"
              value={data.info.kelurahan}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Kecamatan :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="kecamatan"
              value={data.info.kecamatan}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Kota :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="kota"
              value={data.info.kota}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Telepon :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="phone"
              value={data.info.phone}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Form.Label column sm={3} className="fw-bold">
            Email :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="email"
              value={data.info.email}
              onChange={handleChange}
              type="email"
            />
          </Col>
        </Row>

        <div className="text-center">
          {/* onBack not shown in image but good UX. Image shows only 'Submit' */}
          <Button
            variant="success"
            type="submit"
            size="lg"
            className="px-5"
            style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step3Info;
