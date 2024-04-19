import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../Picture/Long logo.png";
import Phone from "../../Picture/phone-call.png";
import Graphic from "../../Picture/mail-opened.png";
import Chevron from "../../Picture/chevron-down (1).png";
import Whatsapp from "../../Picture/brand-whatsapp.png";
import Linkedin from "../../Picture/brand-linkedin.png";
import Action from "../../Picture/chevron-right.png";
import ChevronUp from "../../Picture/chevron-up.png";
import RestIcon from "../../Picture/Graphic.png";
import PostIcon from "../../Picture/Graphic (1).png";

function Navbar({ onFreeTrialClick }) {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-section left">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="navbar-links">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Главная
          </NavLink>
          <NavLink
            to="/restaurants"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Рестораны
          </NavLink>
          <NavLink
            to="/suppliers"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Поставщики
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            О нас
          </NavLink>
          <div className="nav-link contact-dropdown">
            <button
              onClick={toggleContactDropdown}
              className={`dropbtn ${isContactDropdownOpen ? "active" : ""}`}
            >
              Контакты
              {isContactDropdownOpen ? (
                <img src={ChevronUp} alt="Chevron Up" />
              ) : (
                <img src={Chevron} alt="Chevron Down" />
              )}
            </button>
            {isContactDropdownOpen && (
              <div className="dropdown-content">
                <a href="tel:+77777777777" className="dropdown-item">
                  <img src={Phone} alt="Phone" className="icon phone-icon" />
                  + 7 (777) 777 77 77
                  <img src={Action} alt="Action" className="chevron-right" />
                </a>
                <a href="mailto:hello@3f.com" className="dropdown-item">
                  <img
                    src={Graphic}
                    alt="Graphic"
                    className="icon email-icon"
                  />
                  support@kook.kz
                  <img src={Action} alt="Action" className="chevron-right" />
                </a>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <span className="icon linkedin-icon">
                      <img src={Linkedin} alt="Linkedin" />
                    </span>
                  </a>
                  <a href="#" className="social-link">
                    <span className="icon whatsapp-icon">
                      <img src={Whatsapp} alt="Whatsapp" />
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-actions">
        <div className="nav-link-login login-dropdown">
          <button
            onClick={toggleLoginDropdown}
            className={`action-button action-login ${
              isLoginDropdownOpen ? "active" : ""
            }`}
          >
            Войти{" "}
            {isLoginDropdownOpen ? (
              <img src={ChevronUp} alt="Chevron Up" />
            ) : (
              <img src={Chevron} alt="Chevron Down" />
            )}
          </button>
          {isLoginDropdownOpen && (
            <div className="dropdown-content-login">
              <a href="https://shop.3f.kz/" className="dropdown-item-login">
                <img src={RestIcon} alt="Restaurant" className="icon-login" />
                Как ресторан
                <img src={Action} alt="Action" className="chevron-right" />
              </a>
              <a
                href="https://shop.3f.kz/index.php?route=vendor/login"
                className="dropdown-item-login"
              >
                <img src={PostIcon} alt="Supplier" className="icon-login" />
                Как поставщик
                <img src={Action} alt="Action" className="chevron-right" />
              </a>
            </div>
          )}
        </div>
        <button
          className="action-button action-button--accent"
          onClick={onFreeTrialClick}
        >
          Начать бесплатно
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
