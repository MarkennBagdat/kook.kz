import React from "react";
import "./restaurantsPage.css"; // Make sure the CSS file path is correct
import BannerImage from "../../../Picture/Banner-1.png"; // Update the import path if necessary

const MainSection = () => {
  return (
    <section
      className="main-section"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="main-content">
        <h1>Лучший помощник
на вашей кухне</h1>
        <p>Отправляйте заказы всем вашим поставщикам за пять минут.
Больше не нужно задерживаться на работе, печатая списки закупа
в WhatsApp</p>
        <div className="main-buttons">
          <button className="btn btn-primary">Начать бесплатно</button>
          <button className="btn btn-secondary">Скачать приложение</button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
