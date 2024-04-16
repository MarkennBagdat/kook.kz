import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"; // Make sure this path is correct
import Logo from "./Photo/Logo.svg";
import Phone from "./Photo/phone-call.svg";
import Graphic from "./Photo/Graphic.svg";
import Chevron from "./Photo/chevron-down.svg";
import Whatsapp from "./Photo/brand-whatsapp.svg";
import Linkedin from "./Photo/brand-linkedin.svg";
import Instagram from "./Photo/brand-instagram.svg";
import Action from "./Photo/Actions.svg";
import World from "./Photo/world.svg";
import ChevronUp from "./Photo/chevron-up.svg";
import RestIcon from "./Photo/Rest.svg";
import PostIcon from "./Photo/Post.svg";

function Navbar() {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

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
                    <span className="icon instagram-icon">
                      <img src={Instagram} alt="Instagram" />
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
        <button className="action-button action-button--accent">
          Начать бесплатно
        </button>
        <div
          className="nav-link language-dropdown"
          onMouseEnter={() => setIsLanguageDropdownOpen(true)}
          onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          style={{ position: "relative" }}
        >
          <img
            src={World}
            alt="World"
            className={`world-icon ${isLanguageDropdownOpen ? "hover" : ""}`}
          />
          {isLanguageDropdownOpen && (
            <div className="dropdown-content-language">
              <a href="/ru" className="dropdown-item-language">
                Русский
              </a>
              <a href="/kk" className="dropdown-item-language">
                Қазақ тілі
              </a>
              <a href="/en" className="dropdown-item-language">
                English
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
