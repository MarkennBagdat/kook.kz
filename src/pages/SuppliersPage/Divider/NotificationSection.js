import React from "react";
import "./suppliersPage.css";
import Visual from "../../../Picture/Visual (8).svg"; // Path to your visual image
import Points from '../../../Picture/Points.svg';

const NotificationSection = () => {
    return (
        <section className="notification-section">
          <div className="find-products-visual">
            <img src={Visual} alt="Mobile app interface" className="phone-image" />
          </div>
          <div className="find-products-info">
            <h2 className="find-products-title">
            Моментальные уведомления о новых заказах в Telegram:
            </h2>
            <div className="find-products-list">
              <img src={Points} alt="Points" className="Points-notification" />
            </div>
            <button className="find-products-button">Начать бесплатно</button>
          </div>
        </section>
      );
};

export default NotificationSection;
