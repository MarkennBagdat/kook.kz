import React from "react";
import "./AboutPage.css";
import LongLogo from "../../../Picture/Longlogo.svg";
import ExternalLinkIcon from "../../../Picture/external-link.png";

const LinkSection = () => {
  return (
    <section className="link-section">
      <div className="container">
        <div className="aboutme__inner">
          <div className="about-page">
            <div className="about-content">
              <img src={LongLogo} alt="Kook" className="about-logo" />
              <div className="about-text-content">
                <p>Что о нас пишут СМИ, можно почитать тут</p>
                <a
                  href="https://kapital.kz/business/124264/kazakhstanskiy-startap-kook-privlek-200-tysyach-angel-skikh-investitsiy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  Kapital
                  <img
                    src={ExternalLinkIcon}
                    alt="External Link"
                    className="external-link-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkSection;
