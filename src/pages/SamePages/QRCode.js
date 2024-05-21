import React, { useState, useEffect } from "react";
import "../MainPage/Divider/MainPage.css";
import QRCodeImage from "../../Picture/QRCode.png";
import DeviceMobile from "../../Picture/device-mobile.png";
import GoogleIcon from "../../Picture/Logos.svg";
import AppStoreIcon from "../../Picture/Logos (1).svg";

function QRCode() {
  const [showQR, setShowQR] = useState(false); // This will toggle between showing and hiding the QR code

  const toggleQR = () => setShowQR(!showQR);

  useEffect(() => {
    function handleScroll() {
      const footer = document.querySelector(".footer"); // Use the actual class or ID of your footer
      const qrInfo = document.querySelector(".qr-info");
      const footerRect = footer.getBoundingClientRect();
      const footerPosition = footerRect.top - window.innerHeight;

      if (footerPosition <= 0) {
        // We've reached the footer
        qrInfo.style.display = "none";
      } else {
        qrInfo.style.display = "block";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="qr">
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
                href="https://apps.apple.com/ca/app/kook-kz/id6444289181"
                className="download-button app-store"
              >
                <p> App Store</p>
                <img src={AppStoreIcon} alt="App Store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=kz.freshfromfarm.app"
                className="download-button google-play"
              >
                <p>Google Play</p>
                <img src={GoogleIcon} alt="Google Play" />
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
    </div>
  );
}

export default QRCode;
