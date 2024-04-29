import React, { useState } from "react";
import "../MainPage/Divider/MainPage.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Что такое kook?",
      answer:
        "kook - это платформа, соединяющая рестораны и поставщиков. Это решение, созданное нами с заботой о вашем времени и с целью упрощения вашего бизнеса. Наша миссия помогать вам легко и быстро взаимодействовать с поставщиками, чтобы обеспечить лучшее качество и цену товаров для вашей кухни и способствовать созданию вами кулинарных шедевров для ваших гостей.",
    },
    {
      question: "Подключение к платформе для поставщиков платное?",
      answer:
        "Нет, подключение БЕСПЛАТНОЕ. Вы даже можете выставить все свои товары и получать заказы на kook бесплатно. Если вы решите использовать kook для управления заказами, настройкой интеграции, спец. прайсов и продвижений, мы индивидуально рассчитываем стоимость для вашей компании.",
    },
    {
      question: "Есть ли интеграции с другими системами?",
      answer:
        "Да, у kook есть прямая интеграция с 1С, и в процессе настройка интеграций с R-keeper и iiko. Наша команда тесно сотрудничает и с ресторанами, и поставщиками, чтобы обеспечить гладкий процесс передачи данных и исключить перебои в вашей работе. Также возможна интеграция с другими системами, при необходимости. Для уточнения, свяжитесь с нашим менеджером.",
    },
    {
      question:
        "Как kook обеспечивает безопасность и конфиденциальность данных?",
      answer:
        "Мы придерживаемся строгих стандартов защиты данных и применяем передовые технологии безопасности, включая шифрование данных, многоуровневую аутентификацию, регулярные аудиты безопасности и мониторинг защищенных сред. Наш сайт, размещенный на AWS, обеспечивает надежную инфраструктуру и соответствие современным стандартам безопасности в области облачных вычислений.",
    },
    // Add more FAQs here as needed
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__inner">
          <h2 className="faq-title">Вопросы и ответы</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => toggleFAQ(index)}
              >
                <div
                  className={`faq-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {faq.question}
                  <span
                    className={`faq-icon ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
