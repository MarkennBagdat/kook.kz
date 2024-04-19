import React from "react";
import "./suppliersPage.css"; // Make sure the CSS file path is correct
import BannerImage from "../../../Picture/Banner-2.png"; // Update the import path if necessary

const SuplierSection = () => {
  return (
    <section
      className="main-section"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="main-content">
        <h1>У нас есть решения для всех типов поставщиков</h1>
        <p>
          Мы создаем возможности и разрабатываем индивидуальные решения для всех
          - локальных производителей, дистрибьюторов и индивидуальных
          предпринимателе
        </p>
        <div className="main-buttons">
          <button className="btn btn-primary">Записаться на демо</button>
        </div>
      </div>
    </section>
  );
};

export default SuplierSection;
