import React from "react";
import "../MainPage/Divider/MainPage.css";
import Visual from "../../Picture/Visual.png"; // The phone and sun graphic
import StarAccess from "../../Picture/StarAccess.png"; // Star icon
import Ellipse from "../../Picture/Ellipse.png";

const AccessSection = ({ openFormModal }) => {
  return (
    <section className="access-section">
      <div className="access-content">
        <h2 className="access-title">
          Получите доступ к платформе {" "}
          
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
          Онлайн маркетплейс, в котором вы найдете поставщиков и товары по всем
          категориям
        </p>
        <div class="access-buttons">
          <button
            class="access-button access-button-solid"
            onClick={openFormModal}
          >
            Подать заявку
          </button>
          <button class="access-button access-button-outlined">
            Записаться на демо
          </button>
        </div>
      </div>
      <div className="access-visual">
        <img
          src={Visual}
          alt="Phone with sun graphic"
          className="Visualphone"
        />
        <img src={StarAccess} alt="Star" className="star" />
      </div>
    </section>
  );
};

export default AccessSection;
