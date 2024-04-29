// FindProductsSection.js
import React, { useState, useEffect } from "react";
import "../../SuppliersPage/Divider/suppliersPage.css"; // Path to your CSS file
import Visual2 from "../../../Picture/Visual (23).png"; // Path to your visual image
import StarIcon from "../../../Picture/Star1.svg";
import VisualM2 from "../../../Picture/Visual2 RestM.png";


const FindProductsSection = ({ openFormModal }) => {
  const [bannerSrc, setBannerSrc] = useState(Visual2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBannerSrc(VisualM2);
      } else {
        setBannerSrc(Visual2);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="find-products-section">
      <div className="container">
        <div className="find__inner">
          <div className="find-products-visual">
            <img
              src={bannerSrc}
              alt="Mobile app interface"
              className="phone-image"
            />
          </div>
          <div className="find-products-info">
            <h2 className="find-products-title">
              Находите новые товары и поставщиков
            </h2>
            <div className="find-products-list">
              <div className="find-products-item">
                <img src={StarIcon} alt="Star" className="find-products-star" />
                <span>
                  Ищите<span className="save-highlight">новые товары</span> и
                  альтернативы при обновлении меню
                </span>
              </div>
              <div className="find-products-item">
                <img src={StarIcon} alt="Star" className="find-products-star" />
                <span>
                  Ищите новых
                  <span className="save-highlight">долгосрочных партнеров</span>{" "}
                  для сотрудничества в разрезе категорий товаров (мясо,
                  морепродукты, бакалея и т.д.)
                </span>
              </div>
              <div className="find-products-item">
                <img src={StarIcon} alt="Star" className="find-products-star" />
                <span>
                  Держите “руку на пульсе”
                  <span className="save-highlight">по ценам и новинкам</span> на
                  рынке
                </span>
              </div>
            </div>
            <button className="find-products-button" onClick={openFormModal}>
              Начать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindProductsSection;
