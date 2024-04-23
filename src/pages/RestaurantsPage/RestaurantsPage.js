// MainPage.js
import React from "react";
import { useState } from "react";
import "../SuppliersPage/Divider/suppliersPage.css";
import MainSection from "./Divider/MainSection";
import SaveTimeSection from "./Divider/SaveTimeSection";
import FindProductsSection from "./Divider/FindProductsSection"; // Placeholder for finding products section
import EnsureTransparencySection from "./Divider/EnsureTransparencySection";
import BeSureSection from "./Divider/BeSureSection";
import AccessSection from "../SamePages/AccessSection";
import FAQ from "../SamePages/FAQ";
// import Testimonials from "../SamePages/Testimonials";
import QRCode from "../SamePages/QRCode";
import "../MainPage/Divider/MainPage.css";
import FormSection from "../../pages/FormPage/FormSection";

const RestaurantsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="restaurants-page">
      <MainSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <SaveTimeSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <FindProductsSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <EnsureTransparencySection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <BeSureSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      {/* <Testimonials /> */}
      <AccessSection openFormModal={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
      <FAQ />
      <QRCode />
    </main>
  );
};

export default RestaurantsPage;
