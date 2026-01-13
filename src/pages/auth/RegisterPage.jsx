import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/apiClient";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    mosqueName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { mosqueName, email, password } = formData;
      // 1. Register
      await authService.register({ mosqueName, email, password });

      // 2. Auto Login
      const { user } = await authService.login(email, password);

      // 3. Redirect to Setup
      navigate("/setup");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Gagal mendaftar. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* Left Side: Logo */}
          <Col md={6} className="text-center text-white mb-4 mb-md-0">
            <div className="mb-3">
              <h1 className="fw-bold display-4">Masjid Indonesia</h1>
              <p className="lead spacing-2">M A S J I D D I G I T A L</p>
            </div>
          </Col>

          {/* Right Side: Form */}
          <Col md={5}>
            <Card
              className="auth-card border-0 shadow-lg p-4"
              style={{ backgroundColor: "#A5D6B8" }}
            >
              <Card.Body>
                <h3 className="fw-bold mb-4">Buat Akun</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Masjid</Form.Label>
                    <Form.Control
                      type="text"
                      name="mosqueName"
                      value={formData.mosqueName}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="py-2"
                      />
                      <Button
                        variant="outline-secondary"
                        className="bg-white border-start-0 text-muted"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Captcha" required />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="secondary"
                      type="submit"
                      disabled={loading}
                      style={{
                        background: "#9ca3af",
                        border: "none",
                        color: "white",
                      }}
                      className="py-2"
                    >
                      {loading ? "Memuat..." : "Daftar"}
                    </Button>
                    <Button
                      variant="light"
                      className="bg-white text-dark py-2"
                      as={Link}
                      to="/login"
                    >
                      Sudah punya akun? Login disini
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
