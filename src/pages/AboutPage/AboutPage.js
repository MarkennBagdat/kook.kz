// src/pages/HomePage/HomePage.js
import { useState } from "react";
import React from "react";
import './Divider/AboutPage.css'
import LinkSection from "./Divider/LinkSection";
import DescriptionSection from "./Divider/DescriptionSection";
import TitleSection from "./Divider/TitleSection";
import QRCodeImage from "../../Picture/QRCode.png";
import DeviceMobile from "../../Picture/device-mobile.png";


const AboutPage = () => {
  const [showQR, setShowQR] = useState(true);
  const toggleQR = () => setShowQR(!showQR);

  return (
    <main className="about-page">
      <LinkSection />
      <DescriptionSection/>
      <TitleSection />
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

export default AboutPage;
