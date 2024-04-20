import React from "react";
import "./suppliersPage.css";
import Visual from "../../../Picture/Visual (7).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star2.png";
import Statuses from "../../../Picture/Statuses.png";

const OrderSection = ({ openFormModal }) => {
  return (
    <section className="order-section">
      <div className="save-time-content">
        <h2 className="save-time-title">Получайте заказы от новых клиентов </h2>
        <div className="save-time-list">
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
              Получайте заказы от клиентов, которые{" "}
              <span className="suplier-highlight">уже заказывают через 3F</span>
            </span>
          </div>
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
              <span className="suplier-highlight">
                Сократите время менеджеров
              </span>{" "}
              на разбор непонятного почерка и уточнение
            </span>
          </div>
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <div className="statuses-container">
              <span className="statuses-text">Меняйте статус заказов:</span>
              <img src={Statuses} alt="Statuses" className="statuses-icon" />
            </div>
          </div>
        </div>
        <button className="save-time-button" onClick={openFormModal}>Начать бесплатно</button>
      </div>
      <div className="save-time-visual">
        <img src={Visual} alt="Phone visual" className="phone-image" />
      </div>
    </section>
  );
};

export default OrderSection;
