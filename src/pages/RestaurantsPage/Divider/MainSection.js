import React from "react";
import "./restaurantsPage.css"; // Make sure the CSS file path is correct
import BannerImage from "../../../Picture/Banner-1.png"; // Update the import path if necessary

const MainSection = ({ openFormModal }) => {
  return (
    <div className="suppliers-pages-rest">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Лучший помощник на вашей кухне</h1>
          <p className="custom-paragraph">
            Отправляйте заказы всем вашим поставщикам за пять минут. Больше не
            нужно задерживаться на работе, печатая списки закупа в WhatsApp
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={openFormModal}>Начать бесплатно</button>
            <button
              className="btn btn-secondary"
              onClick={() => (window.location.href = "https://shop.3f.kz/")}
            >
              Скачать приложение
            </button>
          </div>
        </div>
      </div>
      {/* Other sections of the page would go here */}
    </div>
  );
};

export default MainSection;
