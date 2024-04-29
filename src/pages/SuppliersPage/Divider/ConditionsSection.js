import React, { useState, useEffect } from "react";
import "./suppliersPage.css"; // Update the path according to your file structure
import Visual5 from "../../../Picture/Visual (5).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star2.svg";
import VisualM5 from "../../../Picture/VisualSupM1.png";


const ConditionsSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(Visual5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBannerSrc(VisualM5);
      } else {
        setBannerSrc(Visual5);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="conditions-section">
      <div className="container">
        <div className="save-time__inner">
          <div className="save-time-content">
            <h2 className="save-time-title">
            Обозначьте свои условия работы
            </h2>
            <div className="save-time-list">
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Выбирайте{" "}
                  <span className="suplier-highlight">дни доставки</span> и
                  временные слоты
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Устанавливайте{" "}
                  <span className="suplier-highlight">
                    минимальную сумму заказа
                  </span>{" "}
                  и стоимость доставки
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Добавляйте ваш логотип,{" "}
                  <span className="suplier-highlight">
                    описание и условия работы
                  </span>
                </span>
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

export default ConditionsSection;
