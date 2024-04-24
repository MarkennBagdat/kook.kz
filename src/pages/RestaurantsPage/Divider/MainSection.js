import React, { useState, useEffect } from "react";
import "../../SuppliersPage/Divider/suppliersPage.css";
import BannerImage from "../../../Picture/Banner-1.png"; // Update the import path if necessary
import BannerMobile from "../../../Picture/BannerRestMobile.png";

const MainSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(BannerImage);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
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
    <section className="suplier">
      <div className="container">
        <div className="suplier__inner">
          <div className="suppliers-pages">
            <div
              className="hero-section"
              style={{ backgroundImage: `url(${bannerSrc})` }}
            >
              <div className="hero-content">
                <h1 className="hero-title">Лучший помощник на вашей кухне</h1>
                <p className="custom-paragraph">
                  Отправляйте заказы всем вашим поставщикам за пять минут.
                  Больше не нужно задерживаться на работе, печатая списки закупа
                  в WhatsApp
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={openFormModal}>
                    Начать бесплатно
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      (window.location.href = "https://shop.3f.kz/")
                    }
                  >
                    Скачать приложение
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
