import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Collapse,
} from "react-bootstrap";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMosque,
  FaList,
  FaImages,
  FaNewspaper,
  FaPhone,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaDesktop,
  FaChevronDown,
  FaChevronRight,
  FaBullhorn,
  FaClock,
} from "react-icons/fa";
import { authService } from "../../services/apiClient";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useState(authService.getCurrentUser());

  // Sidebar Accordion States
  const [openProgram, setOpenProgram] = useState(false);
  const [openFinance, setOpenFinance] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="d-flex w-100 overflow-hidden">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      {/* Sidebar */}
      <div
        className="sidebar d-flex flex-column flex-shrink-0 p-3"
        style={{
          width: "280px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          overflowY: "auto",
          zIndex: 1000,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none px-3"
        >
          <div className="lh-1">
            <span className="fs-6 d-block fw-bold text-uppercase">Logo</span>
            <span className="fs-5 fw-bold">Masjid</span>
          </div>
        </a>
        <hr className="bg-white" />
        <Nav className="flex-column mb-auto">
          <Nav.Link
            as={Link}
            to="/app/dashboard"
            className={isActive("dashboard") ? "active" : ""}
          >
            <FaHome className="me-2" /> Dashboard
          </Nav.Link>
          <div className="px-3 my-3">
            <Button
              as={Link}
              to="/website"
              target="_blank"
              variant="success"
              className="w-100 fw-bold d-flex align-items-center justify-content-center py-2"
              style={{ backgroundColor: "#0f5132", borderColor: "#0f5132" }}
            >
              <FaDesktop className="me-2" /> Lihat Website
            </Button>
          </div>
          <Nav.Link
            as={Link}
            to="/app/editor/home"
            className={isActive("editor/home") ? "active" : ""}
          >
            <FaHome className="me-2" /> Beranda
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/app/profile"
            className={isActive("profile") ? "active" : ""}
          >
            <FaMosque className="me-2" /> Profil Masjid
          </Nav.Link>

          {/* Program (Generic) */}
          <Nav.Link
            as={Link}
            to="/app/activities/program"
            className={isActive("activities/program") ? "active" : ""}
          >
            <FaList className="me-2" /> Program
          </Nav.Link>

          {/* Kajian */}
          <Nav.Link
            as={Link}
            to="/app/activities/kajian"
            className={isActive("activities/kajian") ? "active" : ""}
          >
            <FaBullhorn className="me-2" /> Kajian
          </Nav.Link>

          {/* Jadwal Sholat */}
          <Nav.Link
            as={Link}
            to="/app/activities/prayer"
            className={isActive("activities/prayer") ? "active" : ""}
          >
            <FaClock className="me-2" /> Jadwal Sholat
          </Nav.Link>

          {/* Finance */}
          <Nav.Item>
            <Nav.Link
              onClick={() => setOpenFinance(!openFinance)}
              aria-controls="finance-collapse"
              aria-expanded={openFinance}
              className={`d-flex align-items-center w-100 justify-content-between ${
                isActive("finance") ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <span>
                <FaList className="me-2" /> Keuangan
              </span>
              {openFinance ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}
            </Nav.Link>
            <Collapse in={openFinance}>
              <div id="finance-collapse" className="ps-4">
                <Nav.Link
                  as={Link}
                  to="/app/finance/donations"
                  className={`text-white-50 ${
                    isActive("finance/donations") ? "text-white" : ""
                  }`}
                >
                  Pemasukan
                </Nav.Link>
              </div>
            </Collapse>
          </Nav.Item>

          <Nav.Link
            as={Link}
            to="/app/info/gallery"
            className={isActive("gallery") ? "active" : ""}
          >
            <FaImages className="me-2" /> Media
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/app/info/articles"
            className={isActive("articles") ? "active" : ""}
          >
            <FaNewspaper className="me-2" /> Artikel & Berita
          </Nav.Link>

          {/* Admin */}
          <Nav.Item>
            <Nav.Link
              onClick={() => setOpenAdmin(!openAdmin)}
              aria-controls="admin-collapse"
              aria-expanded={openAdmin}
              className={`d-flex align-items-center w-100 justify-content-between ${
                isActive("admin") ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <span>
                <FaUserCircle className="me-2" /> Admin
              </span>
              {openAdmin ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}
            </Nav.Link>
            <Collapse in={openAdmin}>
              <div id="admin-collapse" className="ps-4">
                <Nav.Link
                  as={Link}
                  to="/app/admin/dkm"
                  className={`text-white-50 ${
                    isActive("admin/dkm") ? "text-white" : ""
                  }`}
                >
                  Pengurus DKM
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/app/admin/jamaah"
                  className={`text-white-50 ${
                    isActive("admin/jamaah") ? "text-white" : ""
                  }`}
                >
                  Data Jamaah
                </Nav.Link>
              </div>
            </Collapse>
          </Nav.Item>

          <Nav.Link
            as={Link}
            to="/app/settings"
            className={isActive("settings") ? "active" : ""}
          >
            <FaCog className="me-2" /> Pengaturan
          </Nav.Link>
        </Nav>
        <hr className="bg-white" />
        <div className="px-3">
          <div
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle cursor-pointer"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            <strong>Keluar</strong>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{
          marginLeft: "280px",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Header */}
        <Navbar
          bg="dark"
          variant="dark"
          className="px-4 sticky-top border-bottom border-secondary"
          style={{ backgroundColor: "#1B4D3E" }}
        >
          <Container fluid>
            <Navbar.Brand href="#home" className="d-none d-md-block">
              Dashboard
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="text-white">
                {user?.name || "Admin"}{" "}
                <FaUserCircle size={24} className="ms-2" />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Content Body */}
        <Container fluid className="p-4">
          <Outlet />
        </Container>

        <footer className="mt-auto py-3 bg-dark text-white text-center">
          <small>@ Copyright Masjid Indonesia</small>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
