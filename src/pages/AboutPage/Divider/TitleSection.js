import React from "react";
import "./AboutPage.css"; // Make sure this path is correct
import MissionIcon from "../../../Picture/IconAbout1.png";
import VisionIcon from "../../../Picture/IconAbout2.png";
import ValuesIcon from "../../../Picture/IconAbout3.png";

const TitleSection = () => {
  return (
    <section className="values-section">
      <div className="container">
        <div className="aboutme-title__inner">
          <div className="value-card">
            <div className="icon-wrapper">
              <img
                src={MissionIcon}
                alt="Mission Icon"
                className="value-icon"
              />
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
              Содействовать созданию устойчивой продовольственной системы,
              повышая эффективность и снижать потери в цепочке поставок
            </p>
          </div>
          <div className="value-card">
            <div className="icon-wrapper">
              <img src={ValuesIcon} alt="Values Icon" className="value-icon" />
            </div>
            <h3 className="value-title">Ценности</h3>
            <p className="value-description">
              <span className="highlighted">Забота и Качество:</span> Заботься о
              клиентах и партнерах как о своей семье, предоставляя лучшее
              качество услуг при каждом взаимодействии.
              <br />
              <br />
              <span className="highlighted">
                Ответственность и инновации:
              </span>{" "}
              Подвергай сомнению, бери ответственность, меняй и создавай
              будущее.
              <br />
              <br />
              <span className="highlighted">Поддержка и страсть:</span> Думай о
              том, что лучше для команды и делай это от души.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
