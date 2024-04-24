import React, { useState, useEffect } from "react";
import "./MainPage.css";
import CheckFilled from "../../../Picture/check_filled.png";
import BannerDesktop from "../../../Picture/Banner.png";
import BannerMobile from "../../../Picture/Banner (3).png";
import DemoButton from "../../FormPage/DemoButton";

// Accept `openFormModal` as a prop
const Features = ({ openFormModal}) => {
  const [bannerSrc, setBannerSrc] = useState(BannerDesktop);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1015) {
        setBannerSrc(BannerMobile);
      } else {
        setBannerSrc(BannerDesktop);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="features">
      <div className="container">
        <div className="features__inner">
            <div className="features-content">
              <h1 className="features-title">
                Место встречи ресторанов и поставщиков
              </h1>
              <p className="main-description">
                kook - это платформа, где рестораны получают доступ к лучшим
                товарам, а поставщики новых клиентов
              </p>
              <div className="features-buttons">
                <button className="button-free" onClick={openFormModal}>
                  Начать бесплатно
                </button>
                <button className="button-demo" onClick={DemoButton}>Записаться на демо</button>
              </div>
              <div className="features-list">
                <div className="feature-item">
                  <img src={CheckFilled} alt="Check icon" />
                  <span>Повышение прозрачности на каждом этапе</span>
                </div>
                <div className="feature-item">
                  <img src={CheckFilled} alt="Check icon" />
                  <span>Индивидуальный подход</span>
                </div>
                <div className="feature-item">
                  <img src={CheckFilled} alt="Check icon" />
                  <span>Служба поддержки</span>
                </div>
              </div>
            </div>

            <div className="features-right">
              <img
                className="features-right__image"
                src={bannerSrc}
                alt="Feature banner"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;
