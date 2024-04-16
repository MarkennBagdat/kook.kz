// BeSureSection.js
import React from "react";
import "./restaurantsPage.css";
import Visual from "./Picture/Visual (4).svg";
import StarIcon from "./Picture/Star 1.svg";

const BeSureSection = () => {
  return (
    <section className="be-sure-section">
      <div className="find-products-visual">
        <img src={Visual} alt="Mobile app interface" className="phone-image" />
      </div>
      <div className="find-products-info">
        <h2 className="find-products-title">
        Будьте уверены в результате
        </h2>
        <div className="find-products-list">
          <div className="find-products-item">
              <img src={StarIcon} alt="Star" className="find-products-star" />
              <span>
              Выбирайте <span className="save-highlight">удобные</span> вам<span className="save-highlight">дату и время</span> доставки по каждому поставщику
              </span>
          </div>
          <div className="find-products-item">
            
              <img src={StarIcon} alt="Star" className="find-products-star" />
              <span>
              Добавляйте комментарии к заказу, чтобы поставщик учел все ваши<span className="save-highlight">пожелания и особенности заказа</span>{" "}
              </span>
          </div>
        </div>
        <button className="find-products-button">Начать бесплатно</button>
      </div>
    </section>
  );
};

export default BeSureSection;
