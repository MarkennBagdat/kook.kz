import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import Spot1 from "../../../Picture/Spot1.png"; // Photo for the "Restaurants" section
import Spot2 from "../../../Picture/Spot2.png"; // Photo for the "Suppliers" section
import StarIcon1 from "../../../Picture/Star1.png"; // Icon for the "Restaurants" section
import StarIcon2 from "../../../Picture/Star2.png"; // Icon for the "Suppliers" section
import ArrowUp from "../../../Picture/arrow-up-right.png";

const ServiceSection = ({ openFormModal }) => {
  let navigate = useNavigate();

  const navigateToRestaurants = () => {
    navigate("/restaurants"); // The route should match the one defined for RestaurantsPage
  };

  const navigateToSuppliers = () => {
    navigate("/suppliers");
  };

  return (
    <section className="service-section">
      <div className="service">
        <img src={Spot1} alt="Restaurants" className="service-image" />
        <div className="service-content">
          <h3 className="service-title">Рестораны</h3>
          <p className="service-title-text">
            Более 3,000 товаров в 15 категориях и более 50 поставщиков уже на
            платформе и ждут ваших заказов
          </p>
          <ul className="service-list">
            <li>
              <img src={StarIcon1} alt="Icon" className="service-icon" />
              Повышение производности на каждом этапе
            </li>
            <li>
              <img src={StarIcon1} alt="Icon" className="service-icon" />
              Индивидуальный подход
            </li>
            <li>
              <img src={StarIcon1} alt="Icon" className="service-icon" />
              Служба поддержки
            </li>
          </ul>
          <div className="buttons-container">
            <button className="service-button-in" onClick={openFormModal}>
              Начать бесплатно
            </button>
            <button
              className="service-button-out"
              onClick={navigateToRestaurants}
            >
              Узнать больше
              <img src={ArrowUp} alt="Arrow up" className="button-image-out" />
            </button>
          </div>
        </div>
      </div>

      <div className="service">
        <img src={Spot2} alt="Suppliers" className="service-image" />
        <div className="service-content">
          <h3 className="service-title">Поставщики</h3>
          <p className="service-title-text">
            Занимайтесь развитием бизнеса, а не перебиванием заказовв систему
          </p>
          <ul className="service-list">
            <li>
              <img src={StarIcon2} alt="Icon" className="service-icon" />
              Повышение производности на каждом этапе
            </li>
            <li>
              <img src={StarIcon2} alt="Icon" className="service-icon" />
              Индивидуальный подход
            </li>
            <li>
              <img src={StarIcon2} alt="Icon" className="service-icon" />
              Служба поддержки
            </li>
          </ul>
          <div className="buttons-container">
            <button className="service-button-in">Записаться на демо</button>
            <button
              className="service-button-out"
              onClick={navigateToSuppliers}
            >
              Узнать больше
              <img src={ArrowUp} alt="Arrow up" className="button-image-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
