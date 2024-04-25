import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./navbar.css";
import Logo from "../../Picture/Longlogo.svg";
import Phone from "../../Picture/Graphic.svg";
import Graphic from "../../Picture/mail-opened.svg";
import Chevron from "../../Picture/chevron-down (1).png";
import Whatsapp from "../../Picture/brand-whatsapp.svg";
import Linkedin from "../../Picture/brand-linkedin.svg";
import Action from "../../Picture/chevron-right.png";
import ChevronUp from "../../Picture/chevron-up.png";
import RestIcon from "../../Picture/Graphic (1).svg";
import PostIcon from "../../Picture/Graphic (2).svg";
import Burger from "./Burger.png";
import XIcon from "../../Picture/x.png";
import ScrollToTopLink from "../../pages/SamePages/ScrollToTopLink";

function Navbar({
    isContactDropdownOpen,
    isLoginDropdownOpen,
    isMobileMenuOpen,
    toggleContactDropdown,
    toggleLoginDropdown,
    toggleMobileMenu,
    openFormModal,
}) {
    const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1015) {
                setContactDropdownOpen(true);
            } else {
                setContactDropdownOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`navbar ${isMobileMenuOpen ? "show" : ""}`}>
            <div className="container">
                <div className="navbar__inner">
                    <div className="hamburger">
                        <div className="hamburger-menu" onClick={toggleMobileMenu}>
                            {!isMobileMenuOpen && <img src={Burger} alt="Menu" className="hamburger-menu__icon" />}
                            {isMobileMenuOpen && <img src={XIcon} alt="Menu" className="hamburger-menu__cancel" />}{" "}
                        </div>
                    </div>

                    <div className="navbar-left">
                        <Link to="/" className="navbar-logo" onClick={toggleMobileMenu}>
                            <img src={Logo} alt="Logo" />
                        </Link>

                        <div className="navbar-links">
                            <ScrollToTopLink to="/" className="nav-link" activeClassName="nav-link-active" onClick={toggleMobileMenu}>
                                Главная
                            </ScrollToTopLink>
                            <ScrollToTopLink
                                to="/restaurants"
                                className="nav-link"
                                activeClassName="nav-link-active"
                                onClick={toggleMobileMenu}
                            >
                                Рестораны
                            </ScrollToTopLink>
                            <ScrollToTopLink
                                to="/suppliers"
                                className="nav-link"
                                activeClassName="nav-link-active"
                                onClick={toggleMobileMenu}
                            >
                                Поставщики
                            </ScrollToTopLink>
                            <ScrollToTopLink
                                to="/about"
                                className="nav-link"
                                activeClassName="nav-link-active"
                                onClick={toggleMobileMenu}
                            >
                                О нас
                            </ScrollToTopLink>

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

                                {(isContactDropdownOpen || contactDropdownOpen) && (
                                    <div className="dropdown-content">
                                        <a href="tel:+77717488223" className="dropdown-item">
                                            <img src={Phone} alt="Phone" className="icon phone-icon" />
                                            + 7 (771) 748 82 23
                                            <img src={Action} alt="Action" className="chevron-right" />
                                        </a>
                                        <a href="mailto:support@kook.kz" className="dropdown-item">
                                            <img src={Graphic} alt="Graphic" className="icon email-icon" />
                                            support@kook.kz
                                            <img src={Action} alt="Action" className="chevron-right" />
                                        </a>
                                        <div className="social-icons">
                                            <a
                                                href="https://www.linkedin.com/company/kook-startup/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                            >
                                                <span className="icon linkedin-icon">
                                                    <img src={Linkedin} alt="Linkedin" />
                                                </span>
                                            </a>
                                            <a
                                                href="https://api.whatsapp.com/send?phone=77717488223"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                            >
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
                                className={`action-login ${isLoginDropdownOpen ? "active" : ""}`}
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
                                    <a href="https://shop.3f.kz/index.php?route=vendor/login" className="dropdown-item-login">
                                        <img src={PostIcon} alt="Supplier" className="icon-login" />
                                        Как поставщик
                                        <img src={Action} alt="Action" className="chevron-right" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <button className="action-button" onClick={openFormModal}>
                            Начать бесплатно
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
