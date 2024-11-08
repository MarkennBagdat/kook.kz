import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import Spot1 from "../../../Picture/Spot1.png"; // Photo for the "Restaurants" section
import Spot2 from "../../../Picture/Spot2.png"; // Photo for the "Suppliers" section
import StarIcon1 from "../../../Picture/Star1.svg"; // Icon for the "Restaurants" section
import StarIcon2 from "../../../Picture/Star2.svg"; // Icon for the "Suppliers" section
import ArrowUp from "../../../Picture/arrow-up-right.svg";
import Banner1 from "../../../Picture/Banner (10).png";
import Banner2 from "../../../Picture/Banner (8).png";


const ServiceSection = ({ openFormModal }) => {
  const message = "Здравствуйте! Я бы хотел(а) записаться на демонстрацию продукта. Можем ли мы обговорить время и дату? Буду ждать вашего подтверждения. Спасибо!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+77717488223?text=${encodedMessage}`;
// State for each banner
const [bannerSrc1, setBannerSrc1] = useState(window.innerWidth <= 980 ? Banner1 : Spot1);
const [bannerSrc2, setBannerSrc2] = useState(window.innerWidth <= 980 ? Banner2 : Spot2);

useEffect(() => {
  function handleResize() {
    if (window.innerWidth <= 980) {
      setBannerSrc1(Banner1);
      setBannerSrc2(Banner2);
    } else {
      setBannerSrc1(Spot1);
      setBannerSrc2(Spot2);
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); 

  // Cleanup function
  return () => window.removeEventListener("resize", handleResize);
}, []);

  let navigate = useNavigate();

  const navigateToRestaurants = () => {
    navigate("/restaurants"); // The route should match the one defined for RestaurantsPage
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  
  const navigateToSuppliers = () => {
    navigate("/suppliers");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  
  

  return (
    <section className="service-section">
      <div className="container">
        <div className="service-section__inner">
          <div className="service">
            <img src={bannerSrc1} alt="Restaurants" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Рестораны</h3>
              <p className="service-title-text">
                Более 3,000 товаров в 15 категориях и более 50 поставщиков уже
                на платформе и ждут ваших заказов
              </p>
              <ul className="service-list">
                <li>
                  <img src={StarIcon1} alt="Icon" className="service-icon" />
                  Оформляйте заказы у всех ваших поставщиков в одном месте
                </li>
                <li>
                  <img src={StarIcon1} alt="Icon" className="service-icon" />
                  Откройте для себя новые бренды и их продукцию
                </li>
                <li>
                  <img src={StarIcon1} alt="Icon" className="service-icon" />
                  Отправляйте запросы на цены всем поставщикам на платформе и
                  вне
                </li>
              </ul>
              <div className="buttons-container">
                <button className="service-button-in" onClick={openFormModal}>
                  Начать бесплатно
                </button>
                <button
                  className="service-button-out"
                  onClick={navigateToRestaurants}

                >
                  Узнать больше
                  <img
                    src={ArrowUp}
                    alt="Arrow up"
                    className="button-image-out"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="service">
            <img src={bannerSrc2} alt="Suppliers" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Поставщики</h3>
              <p className="service-title-text">
                Занимайтесь развитием бизнеса, а не перебиванием заказов в
                систему
              </p>
              <ul className="service-list">
                <li>
                  <img src={StarIcon2} alt="Icon" className="service-icon" />
                  Привлекайте новых клиентов и проводите акции
                </li>
                <li>
                  <img src={StarIcon2} alt="Icon" className="service-icon" />
                  Автоматизируйте процессы приема заказов и создавайте индивидуальные прайсы
                </li>
                <li>
                  <img src={StarIcon2} alt="Icon" className="service-icon" />
                  Получайте запросы на товары от клиентов
                </li>
              </ul>
              <div className="buttons-container">
                <button className="service-button-in" onClick={() => window.open(whatsappUrl, '_blank')}>
                  Записаться на демо
                </button>
                <button
                  className="service-button-out"
                  onClick={navigateToSuppliers}
                >
                  Узнать больше
                  <img
                    src={ArrowUp}
                    alt="Arrow up"
                    className="button-image-out"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
