import React from "react";
import "./restaurantsPage.css"; // Update the path according to your file structure
import Visual from "../../../Picture/Visual (1).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star1.png"; // Update the import if your image is in a different directory

const SaveTimeSection = () => {
  return (
    <section className="save-time-section">
      <div className="save-time-content">
      <h2 className="save-time-title">Экономьте время на оформлении заказов</h2>
        <div className="save-time-list">
          <div className="save-time-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
              Оформляйте заказы всем своим поставщикам{" "}
              <span className="save-highlight">в одном месте</span> — сократите
              время су-шефа/менеджера на звонки и сообщения в WhatsApp
            </span>
          </div>
          <div className="save-time-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
              Добавляйте часто заказываемые товары{" "}
              <span className="save-highlight">в список "Избранных"</span>
            </span>
          </div>
          <div className="save-time-item">
            <img src={Star} alt="Star icon" className="star-icon" />
            <span>
              Экономьте <span className="save-highlight">от 3 часов</span>{" "}
              времени в неделю
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

export default SaveTimeSection;
