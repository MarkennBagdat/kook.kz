// EnsureTransparencySection.js
import React from "react";
import "../../SuppliersPage/Divider/suppliersPage.css"; // Path to your CSS file
import Visual from "../../../Picture/Visual (22).png";
import Star from "../../../Picture/Star1.svg";

const EnsureTransparencySection = ({ openFormModal }) => {
  return (
    <section className="ensure-transparency-section">
      <div className="container">
        <div className="save-time__inner">
          <div className="save-time-content">
            <h2 className="save-time-title">
              Обеспечьте прозрачность в компании
            </h2>
            <div className="save-time-list">
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Нет необходимости состоять в бесчиленных{" "}
                  <span className="save-highlight">WhatsApp чатах</span>
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  Заказы по всем точкам и поставщикам всегда{" "}
                  <span className="save-highlight">доступны под рукой</span> в
                  приложении
                </span>
              </div>
              <div className="save-time-item">
                <img src={Star} alt="Star icon" className="star-icon" />
                <span>
                  <span className="save-highlight">Контролируйте</span> что,в
                  каком объеме и у кого заказывают ваши сотрудники
                </span>
              </div>
            </div>

            <button className="save-time-button" onClick={openFormModal}>
              Начать бесплатно
            </button>
          </div>
          <div className="save-time-visual">
            <img src={Visual} alt="Phone visual" className="phone-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnsureTransparencySection;
