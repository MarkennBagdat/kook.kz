import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import AppStoreBadge from "../../Picture/Logos.png";
import GooglePlayBadge from "../../Picture/Logos (1).png";
import LinkedinIcon from "../../Picture/brand-linkedin (1).png";
import WhatsappIcon from "../../Picture/brand-whatsapp (1).png";
import Logo from "../../Picture/Logo2.png";
import Star from "../../Picture/Star 1.png";

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
                            Лучшая система управления заказами в HoReCa для упрощения оформления и приема заказов и развития вашего
                            бизнеса
                        </p>
                        <div class="store-badges">
                            <a href="https://appstore.com" target="_blank" rel="noopener noreferrer" class="store-badge">
                                <img src={AppStoreBadge} alt="App Store" />
                                <span class="store-badge-text">App Store</span>
                            </a>
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" class="store-badge">
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
                                    <Link to="/">Главная</Link> {/* Use Link component */}
                                </li>
                                <li>
                                    <Link to="/restaurants">Рестораны</Link>
                                </li>
                                <li>
                                    <Link to="/suppliers">Поставщики</Link>
                                </li>
                                <li>
                                    <Link to="/about">О нас</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-contacts">
                            <h3>Контакты</h3>
                            <a href="mailto:hello@3f.com">support@kook.kz</a>
                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={LinkedinIcon} alt="LinkedIn" />
                                </a>
                                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <img src={WhatsappIcon} alt="WhatsApp" />
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
