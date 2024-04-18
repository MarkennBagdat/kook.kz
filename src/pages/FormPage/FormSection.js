import React, { useState } from "react";
import "./FormSection.css";

const FormSection = ({ toggleModal }) => {
  const [activeTab, setActiveTab] = useState("HoReCa");
  const [selectedCity, setSelectedCity] = useState("Алматы");
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    city: 'Алматы', // Для HoReCa по умолчанию Алматы, для Поставщика выберите соответствующий
    establishmentName: '',
    companyType: '',
    categoryName: '',
    additionalInfo: '',
    promoCode: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Здесь код для отправки данных на ваш бэкенд или сервер
  };

  const fieldsForHoReCa = (
    <div>
      <h3 className="section-title">Контактная информация</h3>
      <div className="input-group">
        <input type="text" placeholder="Имя *" required />
        <input type="text" placeholder="Фамилия *" required />
        <input type="tel" placeholder="Номер телефона *" required />
        <input type="email" placeholder="Почта" />
      </div>
      <h3 className="section-title">О заведении</h3>
      <div className="form-section">
      <button
        className={`form-tab ${selectedCity === "Алматы" ? "active" : ""}`}
        onClick={() => setSelectedCity("Алматы")}
      >
        Алматы
      </button>
      <button
        className={`form-tab ${selectedCity === "Астана" ? "active" : ""}`}
        onClick={() => setSelectedCity("Астана")}
      >
        Астана
      </button>
      </div>
      <input type="text" placeholder="Название заведения *" required />

      <h3 className="section-title">Дополнительно</h3>
      <div className="input-group">
        <select required>
          <option disabled selected>
            Откуда узнали о нас?
          </option>

          {/* другие опции */}
        </select>
        <input type="text" placeholder="Промокод" />
      </div>
    </div>
  );

  const fieldsForSupplier = (
    <div>
      <h3 className="section-title">Контактная информация</h3>
      <div className="input-group">
        <input type="text" placeholder="Имя *" required />
        <input type="text" placeholder="Фамилия *" required />
        <input type="email" placeholder="Почта *" required />
        <input type="tel" placeholder="Номер телефона *" required />
      </div>
      <h3 className="section-title">О компании</h3>
      <div className="input-group">
        <input type="text" placeholder="Название компании *" required />
        <textarea type="text" placeholder="Описание деятельности"className="textarea"></textarea>
        <input type="text" placeholder="БИН" />
      </div>
      <h3 className="section-title">ЕЩЁ</h3>
      <div className="input-group">
        <select required>
          <option disabled selected>
            Категория товаров *
          </option>
          {/* Предполагаемые опции */}
          <option value="food">Продовольственные товары</option>
          <option value="tech">Техника</option>
          <option value="service">Услуги</option>
        </select>
        <select required>
          <option disabled selected>
            Тип деятельности компании *
          </option>
          {/* Предполагаемые опции */}
          <option value="manufacturer">Производитель</option>
          <option value="wholesaler">Оптовик</option>
          <option value="retailer">Ритейлер</option>
        </select>
        <select required>
          <option disabled selected>
            Город *
          </option>
          {/* Предполагаемые опции */}
          <option value="almaty">Алматы</option>
          <option value="astana">Астана</option>
          <option value="shymkent">Шымкент</option>
        </select>
      </div>
      <h3 className="section-title">Дополнительно</h3>
      <div className="input-group">
        <select>
          <option disabled selected>
            Откуда узнали о нас?
          </option>
          {/* Предполагаемые опции */}
          <option value="internet">Интернет</option>
          <option value="partner">Партнёры</option>
        </select>
        <input type="text" placeholder="Промокод" />
      </div>
    </div>
  );

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h2 className="modal-title">Заявка</h2>
          <span onClick={toggleModal} className="close-btn">
            &times;
          </span>
        </div>
        <div className="form-section">
          <button
            className={`form-tab ${activeTab === "HoReCa" ? "active" : ""}`}
            onClick={() => setActiveTab("HoReCa")}
          >
            HoReCa
          </button>
          <button
            className={`form-tab ${activeTab === "Supplier" ? "active" : ""}`}
            onClick={() => setActiveTab("Supplier")}
          >
            Поставщик
          </button>
        </div>

        {/* Условный рендеринг полей формы в зависимости от активной вкладки */}
        {activeTab === "HoReCa" ? fieldsForHoReCa : fieldsForSupplier}

        <div className="form-actions">
          <button className="form-btn cancel" onClick={toggleModal}>
            Отмена
          </button>
          <button className="form-btn submit">Отправить заявку</button>
        </div>
        <p className="consent-text">
          Оставляя заявку, вы соглашаетесь на{" "}
          <span className="highlight">обработку персональных данных</span> и <span className="highlight">пользовательское соглашение</span>
        </p>
      </form>
    </div>
  );
};

export default FormSection;
