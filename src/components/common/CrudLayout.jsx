import React from "react";
import { Card, Table, Button, Spinner, Alert } from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const CrudLayout = ({
  title,
  onCreate,
  columns,
  data,
  onEdit,
  onDelete,
  loading,
  emptyMessage,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">{title}</h2>
        <Button variant="success" onClick={onCreate}>
          <FaPlus className="me-2" /> Tambah Baru
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="border-0 text-secondary text-uppercase small fw-bold py-3 px-3"
                  >
                    {col.header}
                  </th>
                ))}
                <th className="border-0 text-end py-3 px-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={columns.length + 1} className="text-center py-5">
                    <Spinner animation="border" variant="success" />
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="text-center py-5">
                    <div className="text-muted d-flex flex-column align-items-center">
                      <p className="mb-2">
                        {emptyMessage || "Belum ada data tersedia."}
                      </p>
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={onCreate}
                      >
                        Buat Data Pertama
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    {columns.map((col, idx) => (
                      <td key={idx} className="px-3">
                        {col.render ? col.render(item) : item[col.accessor]}
                      </td>
                    ))}
                    <td className="text-end px-3">
                      {onEdit && (
                        <Button
                          variant="link"
                          className="text-warning p-0 me-3"
                          onClick={() => onEdit(item)}
                        >
                          <FaEdit />
                        </Button>
                      )}
                      {onDelete && (
                        <Button
                          variant="link"
                          className="text-danger p-0"
                          onClick={() => onDelete(item)}
                        >
                          <FaTrash />
                        </Button>
                      )}
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

export default CrudLayout;
