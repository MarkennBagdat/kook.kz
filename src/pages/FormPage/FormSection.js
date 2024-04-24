import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormSection.css";
import PersonalData from "../../Picture/ОбработкаПерсональныхДанных.pdf";
import UserAgreement from "../../Picture/ПользовательскоеСоглашение.pdf";

const FormSection = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [activeTab, setActiveTab] = useState("HoReCa");
  const [selectedCity, setSelectedCity] = useState("Алматы");
  const [selectedTown, setSelectedTown] = useState("Алматы");
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
    companyName: "",
    businessDescription: "",
    bin: "",
    productCategory: "",
    businessType: "",
    town: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    surname: false,
    phone: false,
    email: false,
    establishmentName: false,
  });

  const SERVICE_ID = "service_mq77pnl";
  const PUBLIC_KEY = "_q4XeMKBIQqaDeivq";

  const handleSubmitForHoReCa = (e) => {
    e.preventDefault();
    const TEMPLATE_ID_HORECA = "template_5ffrl9y";
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_HORECA, e.target, PUBLIC_KEY).then(
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

  const handleSubmitForSupplier = (e) => {
    e.preventDefault();
    const TEMPLATE_ID_SUPPLIER = "template_wwlg2jr";
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID_SUPPLIER, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Заявка успешно отправлена!");
        },
        (error) => {
          console.log(error.text);
          alert("Ошибка при отправке заявки: " + error.text);
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setEmail(value);
      validateEmail(value);
    }
  };

  const handleTabChange = (newType) => {
    setActiveTab(newType);
    setFormData({ ...formData, type: newType });
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setFormData({ ...formData, city });
  };

  const handleTownSelect = (event) => {
    const town = event.target.value;
    setSelectedTown(town); // Устанавливаем выбранный город в соответствующий state
    setFormData({ ...formData, town: town }); // Обновляем formData новым городом
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Введите корректный email");
    } else {
      setEmailError("");
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const fieldsForHoReCa = (
    <div className="component-type">
      <h3 className="section-title">Контактная информация</h3>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Имя *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("name")}
          className={touched.name && !formData.name ? "error" : ""}
        />
        {touched.name && !formData.name && (
          <span className="error-message">Заполните это поле.</span>
        )}
        <input
          type="text"
          name="surname"
          placeholder="Фамилия *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("surname")}
          className={touched.surname && !formData.surname ? "error" : ""}
        />
        {touched.surname && !formData.surname && (
          <span className="error-message">Заполните это поле!</span>
        )}
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("phone")}
          className={touched.phone && !formData.phone ? "error" : ""}
        />
        {touched.phone && !formData.phone && (
          <span className="error-message">Заполните это поле.</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Почта *"
          value={email}
          onChange={handleInputChange}
          onBlur={() => handleBlur("email")}
          className={
            emailError || (touched.email && !formData.email) ? "error" : ""
          }
        />
        {emailError && <div className="error-message">{emailError}</div>}
        {touched.email && !formData.email && !emailError && (
          <span className="error-message">Заполните это поле.</span>
        )}{" "}
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
      <div className="input-group">
        <input
          type="text"
          name="establishmentName"
          placeholder="Название заведения *"
          required
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3 className="section-title">Дополнительно</h3>
        <div className="input-group">
          <div className="select-wrapper">
            <select name="additionalInfo" onChange={handleInputChange}>
              <option value="" disabled>
                Откуда узнали о нас?
              </option>
              <option value="Интернет">Интернет</option>
              <option value="Социальные сети">Социальные сети</option>
              <option value="Рекомендация друзей">Рекомендация друзей</option>
              <option value="Реклама">Реклама</option>
              <option value="Участие в мероприятиях">
                Участие в мероприятиях
              </option>
              <option value="Другое">Другое</option>
            </select>{" "}
          </div>
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
    <div className="component-type">
      <h3 className="section-title">Контактная информация</h3>
      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Имя *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("name")}
          className={touched.name && !formData.name ? "error" : ""}
        />
        {touched.name && !formData.name && (
          <span className="error-message">Заполните это поле.</span>
        )}
        <input
          type="text"
          name="surname"
          placeholder="Фамилия *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("surname")}
          className={touched.surname && !formData.surname ? "error" : ""}
        />
        {touched.surname && !formData.surname && (
          <span className="error-message">Заполните это поле!</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Почта *"
          value={email}
          onChange={handleInputChange}
          className={emailError ? "error" : ""}
        />
        {emailError && <div className="error-message">{emailError}</div>}
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона *"
          required
          onChange={handleInputChange}
          onBlur={() => handleBlur("phone")}
          className={touched.phone && !formData.phone ? "error" : ""}
        />
        {touched.phone && !formData.phone && (
          <span className="error-message">Заполните это поле.</span>
        )}
      </div>
      <h3 className="section-title">О компании</h3>
      <div className="input-group">
        <input
          type="text"
          name="companyName"
          placeholder="Название компании *"
          required
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="businessDescription"
          placeholder="Описание деятельности"
          className="textarea"
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="bin"
          placeholder="БИН"
          onChange={handleInputChange}
        />
        <div className="select-wrapper">
          <select
            name="productCategory"
            required
            onChange={handleInputChange}
            value={formData.productCategory}
          >
            <option value="" disabled selected>
              Категория товаров *
            </option>
            <option value="fresh-vegetables-fruits">
              Свежие овощи и фрукты
            </option>
            <option value="baked-goods-desserts">
              Выпечка, кондитерские изделия и десерты
            </option>
            <option value="meat-poultry-sausages">Мясо, птица, колбасы</option>
            <option value="frozen-products">Замороженные продукты</option>
            <option value="dairy-eggs">Молочная гастрономия и яйца</option>
            <option value="fish-seafood">Рыба и морепродукты</option>
            <option value="groceries">Бакалея</option>
            <option value="pasta-grains">Макаронные изделия и крупы</option>
            <option value="seasonings-spices">Приправы и специи</option>
            <option value="drinks">Напитки</option>
            <option value="coffee-tea">Кофе и чай</option>
            <option value="snacks">Снэки</option>
            <option value="baking-goods">Товары для выпечки</option>
            <option value="cleaning-chemicals">
              Профессиональная бытовая химия
            </option>
            <option value="dishes">Посуда</option>
            <option value="packaging">Упаковка</option>
            <option value="equipment-accessories">
              Оборудование и аксессуары
            </option>
          </select>
        </div>
        <div className="select-wrapper">
          <select
            name="businessType"
            required
            onChange={handleInputChange}
            value={formData.businessType} // Значение управляется состоянием formData
          >
            <option value="" disabled selected>
              Тип деятельности компании *
            </option>
            <option value="distributor">Дистрибьютор</option>
            <option value="manufacturer">Производитель</option>
            <option value="IIP">ИП</option>
            <option value="other">Другое</option>
          </select>
        </div>
        <div className="select-wrapper">
          <select
            name="town"
            required
            value={selectedTown}
            onChange={handleTownSelect}
          >
            <option value="" disabled selected>
              Город *
            </option>
            <option value="almaty">Алматы</option>
            <option value="astana">Астана</option>
            <option value="shymkent">Другой город</option>
            {/* Добавьте дополнительные города по необходимости */}
          </select>
        </div>
      </div>
      <h3 className="section-title">Дополнительно</h3>
      <div className="input-group">
        <div className="select-wrapper">
          <select name="additionalInfo" onChange={handleInputChange}>
            <option value="" disabled selected>
              Откуда узнали о нас?
            </option>
            <option value="Интернет">Интернет</option>
            <option value="Социальные сети">Социальные сети</option>
            <option value="Рекомендация друзей">Рекомендация друзей</option>
            <option value="Реклама">Реклама</option>
            <option value="Участие в мероприятиях">
              Участие в мероприятиях
            </option>
            <option value="Другое">Другое</option>
          </select>{" "}
        </div>
        <input
          type="text"
          name="promoCode"
          placeholder="Промокод"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  return (
    <div className="component-form">
      <div className="modal">
        <form
          className="modal-content"
          onSubmit={
            activeTab === "HoReCa"
              ? handleSubmitForHoReCa
              : handleSubmitForSupplier
          }
        >
          <div className="modal-header">
            <h2 className="modal-title">Заявка</h2>
            <span onClick={toggleModal} className="close-btn">
              &times;
            </span>
          </div>
          <div className="form-section">
            <button
              className={`form-tab ${activeTab === "HoReCa" ? "active" : ""}`}
              onClick={() => handleTabChange("HoReCa")}
            >
              HoReCa
            </button>
            <button
              className={`form-tab ${activeTab === "Supplier" ? "active" : ""}`}
              onClick={() => handleTabChange("Supplier")}
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
            <a
              href={PersonalData}
              target="_blank"
              className="highlight"
            >
              обработку персональных данных
            </a>{" "}
            и{" "}
            <a
              href={UserAgreement}
              target="_blank"
              className="highlight"
            >
              пользовательское соглашение
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
