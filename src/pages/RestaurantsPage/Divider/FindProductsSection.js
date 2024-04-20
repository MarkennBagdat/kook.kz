// FindProductsSection.js
import React from "react";
import "./restaurantsPage.css"; // Path to your CSS file
import Visual from "../../../Picture/Visual (2).png"; // Path to your visual image
import StarIcon from "../../../Picture/Star1.png";

const FindProductsSection = ({ openFormModal }) => {
  return (
    <section className="find-products-section">
      <div className="find-products-visual">
        <img src={Visual} alt="Mobile app interface" className="phone-image" />
      </div>
      <div className="find-products-info">
        <h2 className="find-products-title">
          Находите новые товары и поставщиков
        </h2>
        <div className="find-products-list">
          <div className="find-products-item">
            <img src={StarIcon} alt="Star" className="find-products-star" />
            <span>
              Ищите<span className="save-highlight">новые товары</span> и
              альтернативы при обновлении меню
            </span>
          </div>
          <div className="find-products-item">
            
              <img src={StarIcon} alt="Star" className="find-products-star" />
              <span>
                Ищите новых<span className="save-highlight">долгосрочных партнеров</span>{" "}
                для сотрудничества в разрезе категорий товаров (мясо,
                морепродукты, бакалея и т.д.)
              </span>
          </div>
          <div className="find-products-item">
            
              <img src={StarIcon} alt="Star" className="find-products-star" />
              <span>
                Держите “руку на пульсе”<span className="save-highlight">по ценам и новинкам</span> на
                рынке
              </span>
          </div>
        </div>
        <button className="find-products-button" onClick={openFormModal}>Начать бесплатно</button>
      </div>
    </section>
  );
};

export default FindProductsSection;
