import React from "react";
import { Button, Form } from "react-bootstrap";

const Step5Terms = ({ data, updateData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="py-4">
      <h4 className="mb-3 text-center">Syarat & Ketentuan</h4>
      <div
        className="bg-light p-4 rounded mb-4"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <p>1. Pendaftar adalah pengurus resmi masjid.</p>
        <p>
          2. Data yang diberikan adalah benar dan dapat dipertanggungjawabkan.
        </p>
        <p>3. Website tidak boleh digunakan untuk kegiatan melanggar hukum.</p>
        <p>4. Kami berhak menonaktifkan website jika ditemukan pelanggaran.</p>
        {/* Add more filler text if needed */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Check
          type="checkbox"
          label="Saya menyetujui Syarat & Ketentuan yang berlaku"
          className="mb-4 d-inline-block"
          onChange={(e) => updateData("agreedToTerms", e.target.checked)}
          checked={data.agreedToTerms}
          required
        />
        <br />
        <Button
          variant="success"
          type="submit"
          size="lg"
          className="px-5"
          disabled={!data.agreedToTerms}
          style={{ backgroundColor: "#6cbb95", borderColor: "#6cbb95" }}
        >
          Setuju & Lanjutkan
        </Button>
      </Form>
    </div>
  );
};

export default Step5Terms;
