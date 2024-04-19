import React from "react";
import "./AboutPage.css"; // Make sure this path is correct
import MissionIcon from "../../../Picture/IconAbout1.png"; // Replace with the path to your icon
import VisionIcon from "../../../Picture/IconAbout2.png"; // Replace with the path to your icon
import ValuesIcon from "../../../Picture/IconAbout3.png"; // Replace with the path to your icon

const TitleSection = () => {
  return (
    <section className="values-section">
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={MissionIcon} alt="Mission Icon" className="value-icon" />
        </div>
        <h3 className="value-title">Миссия</h3>
        <p className="value-description">
          Помогать нашим клиентам сокращать расходы и время, а партнерам
          упрощать ведение их бизнеса и расти
        </p>
      </div>
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={VisionIcon} alt="Vision Icon" className="value-icon" />
        </div>
        <h3 className="value-title">Видение</h3>
        <p className="value-description">
          Содействовать созданию устойчивой продовольственной системы, повышая
          эффективность и снижать потери в цепочке поставок
        </p>
      </div>
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={ValuesIcon} alt="Values Icon" className="value-icon" />
        </div>
        <h3 className="value-title">Ценности</h3>
        <p className="value-description">
          Забота и Качество: Заботься о клиентах и партнерах как о своей семье,
          предоставляя лучшее качество услуг при каждом взаимодействии.
          <br/>Ответственность и инновации: Подвергай сомнению, бери ответственность,
          меняй и создавай будущее. 
          <br/>Поддержка и страсть: Думай о том, что лучше
          для команды и делай это от души.
        </p>
      </div>
    </section>
  );
};

export default TitleSection;
