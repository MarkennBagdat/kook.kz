import React from "react";
import "./MainPage.css";
import Avatar1 from "./Picture/Avatar1.svg";
import Avatar2 from "./Picture/Avatar2.svg";
import Avatar3 from "./Picture/Avatar3.svg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">
        Почитайте, что думаю о нас наши клиенты
      </h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="testimonial-info">
            <img src={Avatar1} alt="Avatar 1" className="testimonial-avatar" />
            <div className="testimonial-text-block">
              <p className="testimonial-author">Сабитова Диана</p>
              <p className="testimonial-role">Bitanga • Шеф повар</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="testimonial-info">
            <img src={Avatar2} alt="Avatar 2" className="testimonial-avatar" />
            <div className="testimonial-text-block">
            <p className="testimonial-author">Ахметов Тимур</p>
            <p className="testimonial-role">Essental Gourmet - Эксперт</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipiscing elit tempor
          </p>
          <div className="testimonial-info">
            <img src={Avatar3} alt="Avatar 3" className="testimonial-avatar" />
            <div className="testimonial-text-block">
            <p className="testimonial-author">Арсенов Павел</p>
            <p className="testimonial-role">Tasty Gourmet - Шеф повар</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
