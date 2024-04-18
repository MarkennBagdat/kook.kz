import React from "react";
import "./restaurantsPage.css"; // Make sure the CSS file path is correct
import BannerImage from "../../../Picture/Banner-1.png"; // Update the import path if necessary

const MainSection = () => {
  return (
    <section
      className="main-section"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="main-content">
        <h1>Not so long title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="main-buttons">
          <button className="btn btn-primary">Начать бесплатно</button>
          <button className="btn btn-secondary">Скачать приложение</button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
