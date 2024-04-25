import React from "react";
import "./suppliersPage.css"; // Make sure the CSS file path is correct
import WhatsAppLink from "./WhatsAppLink"; // Import the new component


const SuplierSection = ({ openFormModal }) => {
  const message = "Здравствуйте! Я бы хотел(а) записаться на демонстрацию продукта. Можем ли мы обговорить время и дату? Буду ждать вашего подтверждения. Спасибо!";

  return (
    <section className="suplier">
      <div className="container">
        <div className="suplier__inner">
          <div className="suppliers-pages">
            <div
              className="hero-section"
            >
              <div className="hero-content">
                <h1 className="hero-title">У нас есть решения для всех типов поставщиков</h1>
                <p className="custom-paragraph">
                Мы создаем возможности и разрабатываем индивидуальные решения
                  для всех - локальных производителей, дистрибьюторов и
                  индивидуальных предпринимателей.
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={openFormModal}>
                    Начать бесплатно
                  </button>
                  <WhatsAppLink message={message} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuplierSection;
