import React from "react";
import "../../MainPage/Divider/MainPage.css";
import SeaIcon from "../../../Picture/IMG.png";
import Sea7Icon from "../../../Picture/IMG (1).png";
import TGRIcon from "../../../Picture/IMG (2).png";
import CityFoodIcon from "../../../Picture/IMG (3).png";
import GlobalHalalIcon from "../../../Picture/IMG (8).png";

const logos = [
  { src: SeaIcon, alt: "Морские деликатесы", name: "Морские деликатесы" },
  { src: Sea7Icon, alt: "Семь морей", name: "Семь морей" },
  { src: TGRIcon, alt: "TGR Company", name: "TGR Company" },
  { src: CityFoodIcon, alt: "City Food Trade", name: "City Food Trade" },
  { src: GlobalHalalIcon, alt: "Global Halal Food", name: "Global Halal Food" },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="faq-title">Нам доверяют</div>
        <div className="marquee">
          <div className="marquee-content-rest">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
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
