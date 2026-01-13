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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { user } = await authService.login(email, password);
      // Check if setup is complete (mock check)
      if (user.isSetupComplete) {
        navigate("/app/dashboard");
      } else {
        navigate("/setup");
      }
    } catch (err) {
      console.error("Login Fail:", err);
      setError(
        err.response?.data?.message ||
          "Gagal login. Pastikan email dan password benar."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* Left Side: Logo (Desktop Only) */}
          <Col md={6} className="text-center text-white mb-4 mb-md-0">
            <div className="mb-3">
              {/* Placeholder for Logo - Using Text for now if image invalid */}
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
                <h3 className="fw-bold mb-4">Masuk Akun</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                      {loading ? "Memuat..." : "Masuk"}
                    </Button>
                    <Button
                      variant="light"
                      className="bg-white text-dark py-2"
                      as={Link}
                      to="/register"
                    >
                      Belum punya akun? Daftar disini
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

export default LoginPage;
