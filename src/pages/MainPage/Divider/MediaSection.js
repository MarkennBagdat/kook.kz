import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PhotoMedia from "../../../Picture/Photo (1).png";
import PhotoMobile from "../../../Picture/Visual (15).png";
import ExternalLink from "../../../Picture/external-link.png";

const MediaSection = () => {
  const [bannerSrc, setBannerSrc] = useState(PhotoMedia);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setBannerSrc(PhotoMobile);
    } else {
      setBannerSrc(PhotoMedia);
    }
  }, [windowWidth]);
  return (
    <section className="media-part">
      <div className="container">
        <div className="media__inner">
          <div className="media-section">
            <div className="media-info">
              <div className="media-article">
                <h2>СМИ о нас</h2>
                <p>Читайте статью о нашем сервисе на kapital.kz</p>
                <a
                  href="https://kapital.kz/business/124264/kazakhstanskiy-startap-kook-privlek-200-tysyach-angel-skikh-investitsiy.html?ysclid=lvdrc8chg3214582146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  Kapital <img src={ExternalLink} alt="External link"/>
                </a>
              </div>
              <div className="media-avatar">
                <img src={bannerSrc} alt="Media avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
