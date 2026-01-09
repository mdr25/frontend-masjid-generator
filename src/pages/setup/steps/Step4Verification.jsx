import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

const Step4Verification = ({ data, updateData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4 align-items-center">
              <Form.Label column sm={4} className="fw-bold text-end">
                Upload Akta Wakaf/IMB :
              </Form.Label>
              <Col sm={8}>
                <InputGroup>
                  <Button
                    variant="secondary"
                    className="bg-secondary-subtle text-dark border-secondary-subtle"
                  >
                    Pilih File
                  </Button>
                  <Form.Control type="text" readOnly />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-5 align-items-center">
              <Form.Label column sm={4} className="fw-bold text-end">
                Upload SK Kepengurusan :
              </Form.Label>
              <Col sm={8}>
                <InputGroup>
                  <Button
                    variant="secondary"
                    className="bg-secondary-subtle text-dark border-secondary-subtle"
                  >
                    Pilih File
                  </Button>
                  <Form.Control type="text" readOnly />
                </InputGroup>
              </Col>
            </Row>

            <Button
              variant="success"
              type="submit"
              size="lg"
              className="px-5"
              style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Step4Verification;
