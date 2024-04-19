import React from "react";
import "./suppliersPage.css"; // Update the path according to your file structure
import Visual from "../../../Picture/Visual (5).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star2.png"; // Update the import if your image is in a different directory

const ConditionsSection = () => {
  return (
    <section className="conditions-section">
      <div className="save-time-content">
      <h2 className="save-time-title">Экономьте время на оформлении заказов</h2>
        <div className="save-time-list">
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
            Выбирайте <span className="suplier-highlight">дни доставки</span> и временные слоты
            </span>
          </div>
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
            Устанавливайте <span className="suplier-highlight">минимальную сумму заказа</span> и стоимость доставки
            </span>
          </div>
          <div className="suplier-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
            Добавляйте ваш логотип, <span className="suplier-highlight">описание и условия работы</span>
            </span>
          </div>
        </div>
        <button className="save-time-button">Начать бесплатно</button>
      </div>
      <div className="save-time-visual">
        <img src={Visual} alt="Phone visual" className="phone-image" />
      </div>
    </section>
  );
};

export default ConditionsSection;
