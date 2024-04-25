import React, { useState } from "react";
import "../MainPage/Divider/MainPage.css";
import QRCodeImage from "../../Picture/QRCode.png";
import DeviceMobile from "../../Picture/device-mobile.png";
import GoogleIcon from "../../Picture/Logos.svg";
import AppStoreIcon from "../../Picture/Logo (1).svg";

function QRCode() {
  const [showQR, setShowQR] = useState(false); // This will toggle between showing and hiding the QR code

  const toggleQR = () => setShowQR(!showQR);

  return (
    <div className="qr-info">

      {showQR ? (
        // When showQR is true, display the QR code
        <div className="qr-wrapper">
          <div className="qr-section qr-container">
            <button className="close-qr" onClick={toggleQR}>
              ×
            </button>
            <p className="qr-code-text">Скачайте приложение</p>
            <p className="qr-code-subtext">Отсканируйте QR-код</p>
            <img src={QRCodeImage} alt="QR Code" className="qr-code-image" />
          </div>

          <div className="qr-section mobile-download-buttons">
            <button className="close-qr" onClick={toggleQR}>
              ×
            </button>
            <div className="download-text">Скачайте приложение</div>
            <a
              href="https://apps.apple.com/app/id"
              className="download-button app-store"
            >
              <img src={AppStoreIcon} alt="App Store" />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id"
              className="download-button google-play"
            >
              <img src={GoogleIcon} alt="Google Play" />
              Google Play
            </a>
          </div>
        </div>
      ) : (
        // When showQR is false, show the collapsed bar
        <div className="qr-section qr-collapsed" onClick={toggleQR}>
          <img src={DeviceMobile} alt="Download" className="qrcode-image" />
          <p className="qrcode-text">Скачать приложение</p>
        </div>
      )}
    </div>
  );
}

export default QRCode;
