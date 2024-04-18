import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormSection.css";

const FormSection = ({ toggleModal }) => {
  const [activeTab, setActiveTab] = useState("HoReCa");
  const [selectedCity, setSelectedCity] = useState("Алматы");
  const [formData, setFormData] = useState({
    type: "HoReCa",
    name: "",
    surname: "",
    phone: "",
    email: "",
    city: "Алматы",
    establishmentName: "",
    additionalInfo: "",
    promoCode: "",
  });

  const SERVICE_ID = "service_mq77pnl";
  const TEMPLATE_ID = "template_5ffrl9y";
  const PUBLIC_KEY = "_q4XeMKBIQqaDeivq";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        alert("Заявка успешно отправлена!");
      },
      (error) => {
        console.log(error.text);
        alert("Ошибка при отправке заявки: " + error.text);
      }
    );
    e.target.reset();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabChange = (newType) => {
    setActiveTab(newType);
    setFormData({ ...formData, type: newType });
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setFormData({ ...formData, city });
  };

  const fieldsForHoReCa = (
    <div>
      <h3 className="section-title">Контактная информация</h3>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Имя *"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Фамилия *"
          required
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона *"
          required
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Почта"
          onChange={handleInputChange}
        />
      </div>
      <h3 className="section-title">О заведении</h3>
      <div className="form-section">
        <button
          type="button"
          name="city"
          className={`form-tab ${selectedCity === "Алматы" ? "active" : ""}`}
          onClick={() => handleCityChange("Алматы")}
        >
          Алматы
        </button>
        <button
          type="button"
          name="city"
          className={`form-tab ${selectedCity === "Астана" ? "active" : ""}`}
          onClick={() => handleCityChange("Астана")}
        >
          Астана
        </button>
      </div>
      <input type="hidden" name="city" value={selectedCity} />
      <input
        type="text"
        name="establishmentName"
        placeholder="Название заведения *"
        required
        onChange={handleInputChange}
      />

      <div>
        <h3 className="section-title">Дополнительно</h3>
        <div className="input-group">
          <select name="additionalInfo" onChange={handleInputChange}>
            <option value="" disabled selected>
              Откуда узнали о нас?
            </option>
            <option value="Интернет">Интернет</option>
            <option value="Социальные сети">Социальные сети</option>
            <option value="Рекомендация друзей">Рекомендация друзей</option>
            <option value="Реклама">Реклама</option>
            <option value="Участие в мероприятиях">Участие в мероприятиях</option>
            <option value="Другое">Другое</option>
          </select>
          <input
            type="text"
            name="promoCode"
            placeholder="Промокод"
            onChange={handleInputChange}
          />
        </div>
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
        <textarea
          type="text"
          placeholder="Описание деятельности"
          className="textarea"
        ></textarea>
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
            name="type"
            className={`form-tab ${activeTab === "HoReCa" ? "active" : ""}`}
            onClick={() => handleTabChange("HoReCa")}
          >
            HoReCa
          </button>
          <button
            name="type"
            className={`form-tab ${activeTab === "Supplier" ? "active" : ""}`}
            onClick={() => handleTabChange("Supplier")}
          >
            Поставщик
          </button>
        </div>
        <input type="hidden" name="type" value={activeTab} />


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
          <span className="highlight">обработку персональных данных</span> и{" "}
          <span className="highlight">пользовательское соглашение</span>
        </p>
      </form>
    </div>
  );
};

export default FormSection;
