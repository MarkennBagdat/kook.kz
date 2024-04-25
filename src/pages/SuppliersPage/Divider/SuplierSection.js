import React from "react";
import "./suppliersPage.css"; // Make sure the CSS file path is correct
import BannerImageSup from "../../../Picture/Banner-2.png";
const SuplierSection = ({ openFormModal }) => {
  const message =
    "Здравствуйте! Я бы хотел(а) записаться на демонстрацию продукта. Можем ли мы обговорить время и дату? Буду ждать вашего подтверждения. Спасибо!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+77717488223?text=${encodedMessage}`;
  
  // const [bannerSupSrc, setBannerSupSrc] = useState(BannerImageSup);
  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth <= 768) {
  //       setBannerSupSrc(BannerMobileSup);
  //     } else {
  //       setBannerSupSrc(BannerImageSup);
  //     }
  //   }
  // , { useState, useEffect }
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="suplier">
      <div className="container">
        <div className="suplier__inner">
          <div className="suppliers-pages">
            <div
              className="hero-section"
              style={{ backgroundImage: `url(${BannerImageSup})` }}
            >
              <div className="hero-content">
                <h1 className="hero-title">
                  У нас есть решения для всех типов поставщиков
                </h1>
                <p className="custom-paragraph">
                  Мы создаем возможности и разрабатываем индивидуальные решения
                  для всех - локальных производителей, дистрибьюторов и
                  индивидуальных предпринимателей.
                </p>

                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={openFormModal}>
                    Начать бесплатно
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Записаться на демо
                  </button>
                </div>
              </div>
            </div>
            {/* Other sections of the page would go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuplierSection;
