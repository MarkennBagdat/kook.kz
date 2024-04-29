import React, { useState, useEffect } from "react";
import "../../SuppliersPage/Divider/suppliersPage.css"; // Path to your CSS file
import Visual1 from "../../../Picture/Visual (24).png"; // Update the import if your image is in a different directory
import Star from "../../../Picture/Star1.svg"; // Update the import if your image is in a different directory
import VisualM1 from "../../../Picture/Visual1 RestM.png";

const SaveTimeSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(Visual1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBannerSrc(VisualM1);
      } else {
        setBannerSrc(Visual1);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="save-time-section">
      <div className="container">
        <div className="save-time__inner">
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
        <button className="save-time-button" onClick={openFormModal}>Начать бесплатно</button>
      </div>
      <div className="save-time-visual">
        <img src={bannerSrc} alt="Phone visual" className="phone-image" />
      </div>
      </div>
      </div>
    </section>
  );
};

export default SaveTimeSection;
