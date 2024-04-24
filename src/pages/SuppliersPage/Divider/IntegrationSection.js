import React from "react";
import "./suppliersPage.css";
import Visual from "../../../Picture/Visual (6).png"; // Path to your visual image
import StarIcon from "../../../Picture/Star2.png"; // Path to your star icon image

const IntegrationSection = ({ openFormModal }) => {
  return (
    <section className="integration-section">
      <div className="container">
        <div className="find__inner">
      <div className="find-products-visual">
        <img src={Visual} alt="Mobile app interface" className="phone-image" />
      </div>
      <div className="find-products-info">
        <h2 className="find-products-title">
          Прямая интеграция с платформой для создания накладных{" "}
        </h2>
        <div className="find-products-list">
          <div className="integration-item">
            <img src={StarIcon} alt="Star" className="find-products-star" />
            <span>
              <span className="suplier-highlight">
                Сократите до 3 часов в день{" "}
              </span>
              времени на перебивание заказов в систему
            </span>
          </div>
          <div className="integration-item">
            <img src={StarIcon} alt="Star" className="find-products-star" />
            <span>
              Позвольте вашим менеджерам уделять больше времени
              <span className="suplier-highlight">развитию бизнеса,</span> а не
              рутинным задачам
            </span>
          </div>
          <div className="integration-item">
            <img src={StarIcon} alt="Star" className="find-products-star" />
            <span> 
              <span className="suplier-highlight">Избегайте ошибок</span> ручного
              ввода
            </span>
          </div>
        </div>
        <button className="find-products-button" onClick={openFormModal}>Начать бесплатно</button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
