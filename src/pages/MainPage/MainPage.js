// MainPage.js
import { useState } from "react";
import React from "react";
import "./Divider/MainPage.css";
import Features from "./Divider/Features";
import Testimonials from "./Divider/Testimonials";
import AccessSection from "./Divider/AccessSection";
import FAQ from "./Divider/FAQ";
import ServiceSection from "./Divider/ServiceSection";
import QRCodeImage from "./QRCode.svg";

const MainPage = () => {
  const [showQR, setShowQR] = useState(true);

  const closeQR = () => setShowQR(false);

  return (
    <main className="main-page">
      <Features />
      <Testimonials />
      <ServiceSection />
      <AccessSection />
      <FAQ />
      {showQR && (
        <div className="qr-container">
          <button className="close-qr" onClick={closeQR}>
            ×
          </button>
          <p className="qr-code-text">Скачайте приложение</p>
          <p className="qr-code-subtext">Отсканируйте QR-код</p>
          <img src={QRCodeImage} alt="QR Code" className="qr-code-image" />
        </div>
      )}
    </main>
  );
};

export default MainPage;
