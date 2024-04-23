import React from "react";
import "./suppliersPage.css"; // Make sure the CSS file path is correct
import BannerImage from "../../../Picture/Banner-2.png"; // Update the import path if necessary

const SuplierSection = ({ openFormModal }) => {
  return (
    <section className="suplier">
      <div className="container">
        <div className="suplier__inner">
          <div className="suppliers-pages">
            <div
              className="hero-section"
              style={{ backgroundImage: `url(${BannerImage})` }}
            >
              <div className="hero-content">
                <h1 className="hero-title">
                  У нас есть решения для всех типов поставщиков
                </h1>
                <p className="custom-paragraph">
                  Мы создаем возможности и разрабатываем индивидуальные решения
                  для всех - локальных производителей, дистрибьюторов и
                  индивидуальных предпринимателей.
                </p>

                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={openFormModal}>
                    Начать бесплатно
                  </button>
                  <button className="btn btn-secondary">
                    Записаться на демо
                  </button>
                </div>
              </div>
            </div>
            {/* Other sections of the page would go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuplierSection;
