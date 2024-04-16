import React from "react";
import "./suppliersPage.css"; // Make sure the CSS file path is correct
import BannerImage from "./Picture/Banner.png"; // Update the import path if necessary

const SuplierSection = () => {
  return (
    <section
      className="main-section"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="main-content">
        <h1>Not so long title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="main-buttons">
          <button className="btn btn-primary">Записаться на демо</button>
        </div>
      </div>
    </section>
  );
};

export default SuplierSection;