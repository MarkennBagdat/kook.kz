import React, { useState } from 'react';
import '../MainPage/Divider/MainPage.css';
import QRCodeImage from "../../Picture/QRCode.png";
import DeviceMobile from "../../Picture/device-mobile.png";
import GoogleIcon from "../../Picture/Logos.svg"; // Ensure these paths are correct
import AppStoreIcon from "../../Picture/Logo (1).svg";

function QRCode() {
  const [showQR, setShowQR] = useState(false); // Assuming we want to start with the bar collapsed

  const toggleQR = () => setShowQR(!showQR);

  return (
    <>
      {showQR ? (
        <div className="qr-section qr-container" onClick={toggleQR}>
          <button className="close-qr">
            ×
          </button>
          <p className="qr-code-text">Скачайте приложение</p>
          <p className="qr-code-subtext">Отсканируйте QR-код</p>
          <img src={QRCodeImage} alt="QR Code" className="qr-code-image" />
        </div>
      ) : (
        <div className="qr-section qr-collapsed" onClick={toggleQR}>
          <img src={DeviceMobile} alt="Download" className="qrcode-image" />
          <p className="qrcode-text">Скачать приложение</p>
        </div>
      )}
      {/* Mobile buttons */}
      <div className="mobile-download-buttons">
        <a href="https://play.google.com/store/apps">
          <img src={GoogleIcon} alt="Google Play" />
        </a>
        <a href="https://www.apple.com/ios/app-store/">
          <img src={AppStoreIcon} alt="App Store" />
        </a>
      </div>
    </>
  );
}

export default QRCode;
