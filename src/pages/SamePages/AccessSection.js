import React, { useState, useEffect } from "react";
import "../MainPage/Divider/MainPage.css";
import BannerImage from "../../Picture/Visual (12).png"; // The phone and sun graphic
import BannerMobile from "../../Picture/Visual (13).png";
// import StarAccess from "../../Picture/StarAccess.png";
import Ellipse from "../../Picture/Ellipse.png";

const AccessSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(BannerImage);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 980) {
        setBannerSrc(BannerMobile);
      } else {
        setBannerSrc(BannerImage);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="access-section">
      <div className="container">
        <div className="access__inner">
          <div className="access-content">
            <h2 className="access-title">
              Получите доступ к платформе{" "}
              <span className="highlight">
                бесплатно
                <img
                  src={Ellipse}
                  className="ellipse-behind"
                  alt="Ellipse Background"
                />
              </span>
            </h2>
            <p className="access-description">
              Онлайн маркетплейс, в котором вы найдете поставщиков и товары по
              всем категориям
            </p>
            <div class="features-buttons">
              <button class="button-free" onClick={openFormModal}>
                Подать заявку
              </button>
              <button class="button-demo">Записаться на демо</button>
            </div>
          </div>
          <div className="access-visual">
            <img
              src={bannerSrc}
              alt="Phone with sun graphic"
              className="Visualphone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
