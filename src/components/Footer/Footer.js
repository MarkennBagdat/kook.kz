import React from "react";
import "./Footer.css";
import AppStoreBadge from "../../Picture/Logo (1).svg";
import GooglePlayBadge from "../../Picture/Logos.svg";
import LinkedinIcon from "../../Picture/brand-linkedin (1).png";
import WhatsappIcon from "../../Picture/brand-whatsapp (1).png";
import Logo from "../../Picture/Logo.svg";
import Star from "../../Picture/Star 1.png";
import ScrollToTopLink from "../../pages/SamePages/ScrollToTopLink";
import PersonalDataProcessing from "../../Picture/ОбработкаПерсональныхДанных2.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-brand">
            <div className="logo">
              <img src={Logo} alt="Logo" className="logo-image" />
              <h2 className="logo-text">kook</h2>
            </div>
            <p class="paragraph-style">
              Лучшая система управления заказами в HoReCa для упрощения
              оформления и приема заказов и развития вашего бизнеса
            </p>
            <div class="store-badges">
              <a
                href="https://apps.apple.com/ca/app/kook-kz/id6444289181"
                target="_blank"
                rel="noopener noreferrer"
                class="store-badge"
              >
                <img src={AppStoreBadge} alt="App Store" />
                <span class="store-badge-text">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=kz.freshfromfarm.app"
                target="_blank"
                rel="noopener noreferrer"
                class="store-badge"
              >
                <img src={GooglePlayBadge} alt="Google Play" />
                <span class="store-badge-text">Google Play</span>
              </a>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-sitemap">
              <h3>Карта сайта</h3>
              <ul>
                <li>
                  <ScrollToTopLink to="/">Главная</ScrollToTopLink>{" "}
                </li>
                <li>
                  <ScrollToTopLink to="/restaurants">Рестораны</ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/suppliers">Поставщики</ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/about">О нас</ScrollToTopLink>
                </li>
              </ul>
            </div>
            <div className="footer-contacts">
              <h3>Контакты</h3>
              <a href="mailto:support@kook.kz" className="footer-contacts_a">support@kook.kz</a>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/kook-startup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contacts_a"
                >
                  <img src={LinkedinIcon} alt="LinkedIn" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=77717488223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contacts_a"
                >
                  <img src={WhatsappIcon} alt="WhatsApp" />
                </a>
              </div>
              <div className="footer-bottom_text">
                <p className="footer_text_two">2024 @ТОО "ЮНИКОРН СТАРТАП"</p>
                <a
                  href={PersonalDataProcessing}
                  download="ОбработкаПерсональныхДанных.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_text_two"
                >
                  Обработка персональных данных
                </a>
              </div>
            </div>
          </div>
          <div className="footer-star">
            <img src={Star} alt="Star" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
