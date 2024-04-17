import React from "react";
import "./FormSection.css";

const FormSection = ({ toggleModal }) => {
    
  return (
        <div className="modal">
          <div className="modal-content">
            <span onClick={toggleModal} className="close-btn">
              &times;
            </span>
            <h2>Заявка</h2>
            <div className="form-section">
              <button className="form-tab">HoReCa</button>
              <button className="form-tab">Поставщик</button>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Имя *" />
              <input type="text" placeholder="Фамилия *" />
              <input type="tel" placeholder="Номер телефона *" />
              <input type="email" placeholder="Почта" />
            </div>
            <div className="form-section">
              <button className="form-tab">Алматы</button>
              <button className="form-tab">Астана</button>
              <input type="text" placeholder="Название заведения *" />
            </div>
            <div className="input-group">
              <select>
                <option>Откуда узнали о нас?</option>
                {/* другие опции */}
              </select>
              <input type="text" placeholder="Промокод" />
            </div>
            <div className="form-actions">
              <button className="form-btn cancel" onClick={toggleModal}>
                Отмена
              </button>
              <button className="form-btn submit">Отправить заявку</button>
            </div>
          </div>
        </div>
  );
};

export default FormSection;
