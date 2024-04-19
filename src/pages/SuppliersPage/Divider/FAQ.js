import React, { useState } from "react";
import "./suppliersPage.css";

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
          Что такое kook?
          <span
            className={activeIndex === 0 ? "faq-icon active" : "faq-icon"}
          >
            −
          </span>
        </div>
        <div className={activeIndex === 0 ? "faq-answer show" : "faq-answer"}>
          kook — это платформа, соединяющая рестораны и поставщиков. Это
          решение, созданное нами с заботой о вашем времени и с целью
          упрощения вашего бизнеса. Наша миссия помогать вам легко и быстро
          взаимодействовать с поставщиками, чтобы обеспечить лучшее качество и
          цену товаров для вашей кухни и способствовать созданию вами
          кулинарных шедевров для ваших гостей.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question">
          Подключение к платформе для поставщиков платное?
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
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question">
          Есть ли интеграции с другими системами?
          <span
            className={activeIndex === 2 ? "faq-icon active" : "faq-icon"}
          >
            +
          </span>
        </div>
        <div className={activeIndex === 2 ? "faq-answer show" : "faq-answer"}>
          Да, у kook есть прямая интеграция с 1С, и в процессе настройка
          интеграций с R-keeper и iiko. Наша команда тесно сотрудничает и с
          ресторанами, и поставщиками, чтобы обеспечить гладкий процесс
          передачи данных и исключить перебои в вашей работе. Также возможна
          интеграция с другими системами, при необходимости. Для уточнения,
          свяжитесь с нашим менеджером.
        </div>
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question">
          Как kook обеспечивает безопасность и конфиденциальность данных?
          <span
            className={activeIndex === 3 ? "faq-icon active" : "faq-icon"}
          >
            +
          </span>
        </div>
        <div className={activeIndex === 3 ? "faq-answer show" : "faq-answer"}>
          Безопасность и конфиденциальность данных являются нашими главными
          приоритетами. Мы придерживаемся строгих стандартов защиты данных.
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQ;
