import React, { useState, useEffect } from "react";
import "./suppliersPage.css";
import Visual7 from "../../../Picture/Visual (8).png"; // Path to your visual image
import Points from "../../../Picture/Points (2).png";
import VisualM7 from "../../../Picture/VisualSupM4.png";


const NotificationSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(Visual7);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBannerSrc(VisualM7);
      } else {
        setBannerSrc(Visual7);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="notification-section">
      <div className="container">
        <div className="find__inner">
          <div className="find-products-visual">
            <img
              src={bannerSrc}
              alt="Mobile app interface"
              className="phone-image"
            />
          </div>
          <div className="find-products-info">
            <h2 className="find-products-title">
              Моментальные уведомления о новых заказах в Telegram:
            </h2>
            <div className="find-products-list">
              <img src={Points} alt="Points" className="Points-notification" />
            </div>
            <button className="find-products-button" onClick={openFormModal}>
              Начать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSection;
