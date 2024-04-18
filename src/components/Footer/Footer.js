import React from "react";
import "./Footer.css";
import AppStoreBadge from "../../Picture/LogoF1.svg";
import GooglePlayBadge from "../../Picture/LogoF2.svg";
import LinkedinIcon from "../../Picture/brand-linkedin2.svg";
import WhatsappIcon from "../../Picture/brand-whatsapp2.svg";
import Logo from "../../Picture/Logo2.svg";
import ChevronDown from "../../Picture/chevronDown.svg";
import Star from "../../Picture/Star1.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-image" />
          <h2 className="logo-text">kook</h2>
        </div>

        <p class="paragraph-style">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>

        <div class="store-badges">
          <a
            href="https://appstore.com"
            target="_blank"
            rel="noopener noreferrer"
            class="store-badge"
          >
            <img src={AppStoreBadge} alt="App Store" />
            <span class="store-badge-text">App Store</span>
          </a>
          <a
            href="https://play.google.com"
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
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/restaurants">Рестораны</a>
            </li>
            <li>
              <a href="/suppliers">Поставщики</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
          </ul>
        </div>
        <div className="footer-contacts">
          <h3>Контакты</h3>
          <a href="mailto:hello@3f.com">hello@3f.com</a>
          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div className="footer-language">
          <button>
            Русский <img src={ChevronDown} alt="ChevronDown" />
          </button>
          {/* Dropdown for language selection if needed */}
        </div>
      </div>
      <div className="footer-star">
        <img src={Star} alt="Star" />
      </div>
    </footer>
  );
}

export default Footer;
