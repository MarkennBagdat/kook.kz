import React, {useState} from 'react';
import '../MainPage/Divider/MainPage.css';
import QRCodeImage from "../../Picture/QRCode.png";
import DeviceMobile from "../../Picture/device-mobile.png";

function QRCode() {
    const [showQR, setShowQR] = useState(true);

    const toggleQR = () => setShowQR(!showQR);
  return showQR ? (
    <div className="qr-section qr-container">
      <button className="close-qr" onClick={toggleQR}>
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
  );
}

export default QRCode;
