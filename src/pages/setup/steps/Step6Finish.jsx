import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSync } from "react-icons/fa";

const Step6Finish = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <div className="mb-4 text-success display-1">
        <FaSync />
      </div>
      <h3 className="fw-bold mb-3">Proses Verifikasi Data</h3>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="mb-4">
            Pembuatan website masjid Anda telah masuk ke sistem kami. Namun
            untuk saat ini, website masjid Anda belum kami AKTIFKAN. Kami akan
            melakukan pengecekkan terlebih dahulu terhadap data-data masjid
            Anda.
          </p>
          <p className="mb-4">
            Setelah itu, kami akan mengirimkan informasi AKTIVASI website Anda
            melalui email.
          </p>
          <p className="mb-5 text-muted small">
            Informasi lebih lanjut mengenai layanan kami, silahkan menghubungi
            Customer Service.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-3">
        <Button
          variant="success"
          size="lg"
          className="px-4"
          style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
        >
          Cek Email
        </Button>
        <Button
          variant="success"
          size="lg"
          className="px-4"
          style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
          onClick={() => navigate("/app/dashboard")}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Step6Finish;
