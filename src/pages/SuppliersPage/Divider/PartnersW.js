import React from "react";
import "../../MainPage/Divider/MainPage.css";
import SeaIcon from "../../../Picture/IMG (9).png";
import Sea7Icon from "../../../Picture/IMG (4).png";
import TGRIcon from "../../../Picture/IMG (5).png";
import CityFoodIcon from "../../../Picture/IMG (6).png";
import Sadok from "../../../Picture/IMG (7).png";
import EtAlemi from "../../../Picture/Suppliers/IMG (1).png";
import EcoStar from "../../../Picture/Suppliers/IMG (2).png";
import MicroGreens from "../../../Picture/Suppliers/IMG (3).png";
import FishDream from "../../../Picture/Suppliers/IMG (4).png";
import CleanEtica from "../../../Picture/Suppliers/IMG (5).png";
import Quan from "../../../Picture/Suppliers/IMG (7).png";
import Prica from "../../../Picture/Suppliers/IMG (8).png";
import Ansar from "../../../Picture/Suppliers/IMG (9).png";
import Alel from "../../../Picture/Suppliers/IMG (10).png";
import Talhiz from "../../../Picture/Suppliers/IMG (11).png";
import KakUMamy from "../../../Picture/Suppliers/IMG (12).png";
import FGC from "../../../Picture/Suppliers/IMG (13).png";
import Narlen from "../../../Picture/Suppliers/IMG (14).png";
import MFood from "../../../Picture/Suppliers/IMG (15).png";
import Foodx from "../../../Picture/Suppliers/IMG (16).png";
import MeatEat from "../../../Picture/Suppliers/IMG.png";
import Rucolab from "../../../Picture/Suppliers/IMG (6).png";
import BestSeller from "../../../Picture/Suppliers/IMG (17).png";
import AdalSut from "../../../Picture/Suppliers/IMG (18).png";
import UlttyqEtDukeni from "../../../Picture/Suppliers/IMG (19).png";
import AsFoodCompany from "../../../Picture/Suppliers/IMG (20).png";

const logos = [
  { src: SeaIcon, alt: "Айнанан", name: "Айнанан" },
  { src: Sea7Icon, alt: "Иналка Фуд Сервис", name: "Иналка Фуд Сервис" },
  { src: TGRIcon, alt: "Пищевик", name: "Пищевик" },
  { src: CityFoodIcon, alt: "AFONOLIVA", name: "AFONOLIVA" },
  { src: Sadok, alt: "Садок Органик", name: "Садок Органик" },
  { src: EtAlemi, alt: "Ет Әлемі", name: "Ет Әлемі" },
  { src: EcoStar, alt: "EcoStar", name: "EcoStar" },
  { src: MicroGreens, alt: "MicroGreens Global", name: "MicroGreens Global" },
  { src: FishDream, alt: "Fish Dream", name: "Fish Dream" },
  { src: CleanEtica, alt: "Cleanetica", name: "Cleanetica" },
  { src: Quan, alt: "Bakery Quan", name: "Bakery Quan" },
  { src: Prica, alt: "Прицыно-Курицыно", name: "Прицыно-Курицыно" },
  { src: Ansar, alt: "Ansar Halal", name: "Ansar Halal" },
  { src: Alel, alt: "Алель", name: "Алель" },
  { src: Talhiz, alt: "Talhiz", name: "Talhiz" },
  { src: KakUMamy, alt: "Как у Мамы", name: "Как у Мамы" },
  { src: FGC, alt: "FGC", name: "FGC" },
  { src: Narlen, alt: "Narlen", name: "Narlen" },
  { src: MFood, alt: "mfood.kz", name: "mfood.kz" },
  { src: Foodx, alt: "FoodZ eggs", name: "Foodz eggs" },
  { src: MeatEat, alt: "MeatEat", name: "Meat to Eat" },
  { src: Rucolab, alt: "Rucolab", name: "Rucolab" },
  { src: BestSeller, alt: "Bestseller", name: "Bestseller" },
  { src: AdalSut, alt: "Adal Сүт", name: "Adal Сүт" },
  { src: UlttyqEtDukeni, alt: "Ulttyq Et Dükenı", name: "Foodz eggs Dükenı" },
  { src: AsFoodCompany, alt: "AsFood Company", name: "AsFood Company" },
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
