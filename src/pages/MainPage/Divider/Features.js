import React from "react";
import "./MainPage.css";
import CheckFilled from "../../../Picture/check_filled.svg";
import Banner from "../../../Picture/Banner.svg";

// Accept `openFormModal` as a prop
const Features = ({ openFormModal }) => {
  return (
    <section className="features">
      <div className="features-content">
        <h1 className="features-title">Место встречи ресторанов и поставщиков</h1>
        <p className="main-description">3F — это торговая площадка, где отовики получают лучшие товары, а поставщики легко обрабатывают свои заказы</p>
        <div className="features-buttons">
          <button className="button-free" onClick={openFormModal}>Начать бесплатно</button>
          <button className="button-demo" >Записаться на демо</button>
        </div>
        <div className="features-list">
          <div className="feature-item">
            <img src={CheckFilled} alt="Check icon" />
            <span>Повышение продажности на каждом этапе</span>
          </div>
          <div className="feature-item">
            <img src={CheckFilled} alt="Check icon" />
            <span>Индивидуальный подход</span>
          </div>
          <div className="feature-item">
            <img src={CheckFilled} alt="Check icon" />
            <span>Служба поддержки</span>
          </div>
        </div>
      </div>
      <div className="features-images">
        <img src={Banner} alt="Feature banner" />
      </div>
    </section>
  );
};

export default Features;
