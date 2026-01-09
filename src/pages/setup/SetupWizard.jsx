import React, { useState, useEffect } from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Step1Domain from "./steps/Step1Domain";
import Step2Template from "./steps/Step2Template";
import Step3Info from "./steps/Step3Info";
import Step4Verification from "./steps/Step4Verification";
import Step5Terms from "./steps/Step5Terms";
import Step6Finish from "./steps/Step6Finish";
import "./SetupWizard.css"; // We'll add some styles

const SetupWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Wizards State
  const [wizardData, setWizardData] = useState({
    domain: "",
    templateId: "template-1",
    info: {
      name: "",
      address: "",
      kelurahan: "",
      kecamatan: "",
      kota: "",
      phone: "",
      email: "",
    },
    files: {
      wakaf: null,
      sk: null,
    },
    agreedToTerms: false,
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < totalSteps) {
      // Can't go back from Finish
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const updateData = (key, value) => {
    setWizardData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1Domain
            data={wizardData}
            updateData={updateData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2Template
            data={wizardData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3Info
            data={wizardData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <Step4Verification
            data={wizardData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <Step5Terms
            data={wizardData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return <Step6Finish data={wizardData} />;
      default:
        return null;
    }
  };

  // Header Component based on Image 0
  const WizardHeader = () => (
    <div className="wizard-header bg-success text-white py-3 mb-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <img
              src="/vite.svg"
              alt="Logo"
              height="30"
              className="me-2 filter-white"
            />
            <h5 className="mb-0 fw-bold">
              Masjid
              <br />
              <small className="fw-light">Indonesia</small>
            </h5>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">Masjid Al-Furqon</span>
            {/* Mock Avatar */}
            <div className="rounded-circle border border-white p-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Stepper Steps - Matching Image 0 */}
        <div className="d-flex justify-content-between text-center small position-relative stepper-container">
          {[
            "1. Pilih Nama Domain",
            "2. Pilih Template Desain",
            "3. Informasi Umum",
            "4. Verifikasi Data",
            "5. Syarat & Ketentuan",
            "6. Selesai",
          ].map((label, idx) => {
            const stepNum = idx + 1;
            const isActive = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <div
                key={idx}
                className={`step-item ${isActive ? "active fw-bold" : ""} ${
                  isCompleted ? "completed" : ""
                }`}
                style={{ opacity: isActive || isCompleted ? 1 : 0.6 }}
              >
                {label}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );

  return (
    <div className="min-vh-100 bg-light">
      <WizardHeader />
      <Container className="pb-5">
        <Card className="border-0 shadow-sm wizard-card p-4">
          {renderStep()}
        </Card>
      </Container>
    </div>
  );
};

export default SetupWizard;
