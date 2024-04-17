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
import DeviceMobile from "./device-mobile.svg";
import FormSection from "../../pages/FormPage/FormSection";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQR, setShowQR] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleQR = () => setShowQR(!showQR);

  return (
    <main className="main-page">
      <div>
        <Features openFormModal={toggleModal} />
        {isModalOpen && <FormSection toggleModal={toggleModal} />}
      </div>
      <Testimonials />
      <ServiceSection />
      <AccessSection />
      <FAQ />
      {showQR ? (
        <div className="qr-section qr-container">
          <button className="close-qr" onClick={toggleQR}>
            ×
          </button>
          <p className="qr-code-text">Скачайте приложение</p>
          <p className="qr-code-subtext">Отсканируйте QR-код</p>
          <img src={QRCodeImage} alt="QR Code" className="qr-code-image" />
        </div>
      ) : (
        // Добавлен onClick для всего контейнера, чтобы развернуть QR секцию
        <div className="qr-section qr-collapsed" onClick={toggleQR}>
          <img src={DeviceMobile} alt="Download" className="qrcode-image" />
          <p className="qrcode-text">Скачать приложение</p>
        </div>
      )}
    </main>
  );
};

export default MainPage;
