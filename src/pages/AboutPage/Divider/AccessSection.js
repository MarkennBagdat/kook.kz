import React from "react";
import "./AboutPage.css";
import Visual from "./Picture/Visual.svg"; // The phone and sun graphic
import StarAccess from "./Picture/StarAccess.svg"; // Star icon
import Ellipse from "./Picture/Ellipse.svg"; // Ellipse icon

const AccessSection = () => {
  return (
    <section className="access-section">
      <div className="access-content">
        <h2 className="access-title">
          Получите доступ к платформе{" "}
          <span className="highlight">
            бесплатно
            <img
              src={Ellipse}
              className="ellipse-behind"
              alt="Ellipse Background"
            />
          </span>
        </h2>
        <p className="access-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <div class="access-buttons">
          <button class="access-button access-button-solid">
            Подать заявку
          </button>
          <button class="access-button access-button-outlined">
            Записаться на демо
          </button>
        </div>
      </div>
      <div className="access-visual">
        <img src={Visual} alt="Phone with sun graphic" className="Visualphone"/>
        <img src={StarAccess} alt="Star" className="star" />
      </div>
    </section>
  );
};

export default AccessSection;
