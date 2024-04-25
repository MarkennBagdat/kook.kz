import React, { useState, useEffect } from "react";
import "./suppliersPage.css";
import Visual8 from "../../../Picture/Visual (21).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star2.svg";
import Statuses from "../../../Picture/Statuses (2).png";
import VisualM8 from "../../../Picture/VisualSupM3.png";

const OrderSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(Visual8);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBannerSrc(VisualM8);
      } else {
        setBannerSrc(Visual8);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="order-section">
      <div className="container">
        <div className="save-time__inner">
          <div className="save-time-content">
            <h2 className="save-time-title">
              Получайте заказы от новых клиентов{" "}
            </h2>
            <div className="save-time-list">
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Получайте заказы от клиентов, которые{" "}
                  <span className="suplier-highlight">
                    уже заказывают через kook
                  </span>
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  <span className="suplier-highlight">
                    Сократите время менеджеров
                  </span>{" "}
                  на разбор непонятного почерка и уточнение
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <div className="statuses-container">
                  <span className="statuses-text">Меняйте статус заказов:</span>
                  <img
                    src={Statuses}
                    alt="Statuses"
                    className="statuses-icon"
                  />
                </div>
              </div>
            </div>
            <button className="save-time-button" onClick={openFormModal}>
              Начать бесплатно
            </button>
          </div>
          <div className="save-time-visual">
            <img src={bannerSrc} alt="Phone visual" className="phone-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
