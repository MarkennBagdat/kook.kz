import React, { useState } from "react";
import "./restaurantsPage.css";
import MailForward from "./Picture/mail-forward.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">Вопросы и ответы</h2>
      <div className="faq-container">
        <div className="faq-item" onClick={() => toggleFAQ(0)}>
          <div className={`faq-question ${activeIndex === 0 ? "active" : ""}`}>
            {" "}
            Подключение к платформе платное?
            <span
              className={activeIndex === 0 ? "faq-icon active" : "faq-icon"}
            >
              −
            </span>
          </div>
          <div className={activeIndex === 0 ? "faq-answer show" : "faq-answer"}>
            Нет, подключение БЕСПЛАТНОЕ. Вы даже можете выставить все свои
            товары и получать заказы на 3F бесплатно. Если вы решите
            использовать 3F для управления заказами, настройкой интеграции,
            спец. прайсов и продвижений, мы индивидуально рассчитываем стоимость
            для вашей компании.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <div className="faq-question">
            Будут ли мои клиенты платить что-то за оформление заказов у меня?
            <span
              className={activeIndex === 1 ? "faq-icon active" : "faq-icon"}
            >
              +
            </span>
          </div>
          <div className={activeIndex === 1 ? "faq-answer show" : "faq-answer"}>
            Нет, подключение БЕСПЛАТНОЕ. Вы даже можете выставить все свои
            товары и получать заказы на 3F бесплатно. Если вы решите
            использовать 3F для управления заказами, настройкой интеграции,
            спец. прайсов и продвижений, мы индивидуально рассчитываем стоимость
            для вашей компании.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <div className="faq-question">
            Если все мои конкуренты будут в 3F, нет ли риска, что мои клиенты
            переключатся на них?
            <span
              className={activeIndex === 1 ? "faq-icon active" : "faq-icon"}
            >
              +
            </span>
          </div>
          <div className={activeIndex === 1 ? "faq-answer show" : "faq-answer"}>
            Нет, подключение БЕСПЛАТНОЕ. Вы даже можете выставить все свои
            товары и получать заказы на 3F бесплатно. Если вы решите
            использовать 3F для управления заказами, настройкой интеграции,
            спец. прайсов и продвижений, мы индивидуально рассчитываем стоимость
            для вашей компании.
          </div>
        </div>
        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <div className="faq-question">
            Смогут ли теперь клиенты сравнивать цены с другими поставщиками?
            <span
              className={activeIndex === 1 ? "faq-icon active" : "faq-icon"}
            >
              +
            </span>
          </div>
          <div className={activeIndex === 1 ? "faq-answer show" : "faq-answer"}>
            Нет, подключение БЕСПЛАТНОЕ. Вы даже можете выставить все свои
            товары и получать заказы на 3F бесплатно. Если вы решите
            использовать 3F для управления заказами, настройкой интеграции,
            спец. прайсов и продвижений, мы индивидуально рассчитываем стоимость
            для вашей компании.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
