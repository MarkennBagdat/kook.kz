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
      {/* This button is outside the ternary operation to prevent it from unmounting and losing its state */}
      <button className="close-qr" onClick={toggleQR}>×</button>

      {showQR ? (
        // When showQR is true, display the QR code
        <div className="qr-wrapper">
          <div className="qr-section qr-container">
          <button className="close-qr" onClick={toggleQR}>×</button>
            <p className="qr-code-text">Скачайте приложение</p>
            <p className="qr-code-subtext">Отсканируйте QR-код</p>
            <img src={QRCodeImage} alt="QR Code" className="qr-code-image" />
          </div>

          <div className="qr-section mobile-download-buttons">
          <button className="close-qr" onClick={toggleQR}>×</button>
              <a href="https://play.google.com/store/apps">
                <img src={GoogleIcon} alt="Google Play" />
              </a>
              <a href="https://www.apple.com/ios/app-store/">
                <img src={AppStoreIcon} alt="App Store" />
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
