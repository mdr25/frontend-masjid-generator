import React, { useState, useEffect } from "react";
import { Card, Table, Button, Badge } from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit, FaImage, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mid_programs") || "[]");
    setPrograms(data);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus program ini?")) {
      const updated = programs.filter((p) => p.id !== id);
      setPrograms(updated);
      localStorage.setItem("mid_programs", JSON.stringify(updated));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Daftar Program</h2>
          <p className="text-muted">Kelola program dan kegiatan masjid.</p>
        </div>
        <Button as={Link} to="/app/activities/program/new" variant="primary">
          <FaPlus className="me-2" /> Tambah Program
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                <th className="border-0 py-3 ps-4">Program</th>
                <th className="border-0 py-3">Link URL</th>
                <th className="border-0 py-3">Status</th>
                <th className="border-0 py-3 text-end pe-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {programs.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">
                    Belum ada program. Silakan tambah baru.
                  </td>
                </tr>
              ) : (
                programs.map((item) => (
                  <tr key={item.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="rounded me-3"
                            style={{
                              width: 48,
                              height: 48,
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            className="rounded me-3 bg-light d-flex align-items-center justify-content-center"
                            style={{ width: 48, height: 48 }}
                          >
                            <FaImage className="text-secondary" />
                          </div>
                        )}
                        <div>
                          <div className="fw-bold">{item.title}</div>
                          <div
                            className="small text-muted text-truncate"
                            style={{ maxWidth: 200 }}
                          >
                            {item.content
                              ? item.content.substring(0, 50) + "..."
                              : "Tidak ada deskripsi"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none d-flex align-items-center"
                        >
                          <FaLink size={12} className="me-2" /> {item.link}
                        </a>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      <Badge bg="success" className="rounded-pill">
                        Aktif
                      </Badge>
                    </td>
                    <td className="text-end pe-4">
                      <Button
                        as={Link}
                        to={`/app/activities/program/edit/${item.id}`}
                        variant="link"
                        className="text-dark p-0 me-3"
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProgramList;
