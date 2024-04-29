import React from "react";
import "../../MainPage/Divider/MainPage.css";
import SeaIcon from "../../../Picture/IMG (9).png";
import Sea7Icon from "../../../Picture/IMG (4).png";
import TGRIcon from "../../../Picture/IMG (5).png";
import CityFoodIcon from "../../../Picture/IMG (6).png";
import GlobalHalalIcon from "../../../Picture/IMG (7).png";

const logos = [
  { src: SeaIcon, alt: "Айнанан", name: "Айнанан" },
  { src: Sea7Icon, alt: "Иналка Фуд Сервис", name: "Иналка Фуд Сервис" },
  { src: TGRIcon, alt: "Пищевик", name: "Пищевик" },
  { src: CityFoodIcon, alt: "AFONOLIVA", name: "AFONOLIVA" },
  { src: GlobalHalalIcon, alt: "Садок Органик", name: "Садок Органик" },
  // Add more logos and names as needed
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="faq-title">С нами работают</div>
        <div className="marquee">
          <div className="marquee-content">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div className="marquee-item" key={index}>
                <img src={logo.src} alt={logo.alt} className="img_company" />
                <p className="company-name">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
