// src/pages/HomePage/HomePage.js
import React from "react";
import { useState } from "react";
import "./Divider/suppliersPage.css";
import SuplierSection from "./Divider/SuplierSection";
import ConditionsSection from "./Divider/ConditionsSection";
import IntegrationSection from "./Divider/IntegrationSection";
import OrderSection from "./Divider/OrderSection";
import NotificationSection from "./Divider/NotificationSection";
import AccessSection from "../SamePages/AccessSection";
import FAQ from "../SamePages/FAQ";
// import Testimonials from "../SamePages/Testimonials";
import QRCode from "../SamePages/QRCode";
import FormSection from "../../pages/FormPage/FormSection";


const SuppliersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <main className="suppliers-page">
      <SuplierSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <ConditionsSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <IntegrationSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <OrderSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <NotificationSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      {/* <Testimonials /> */}
      <AccessSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <FAQ />
      <QRCode/>
    </main>
  );
};

export default SuppliersPage;
