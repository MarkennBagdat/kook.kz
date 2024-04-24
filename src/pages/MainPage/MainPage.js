// MainPage.js
import { useState } from "react";
import React from "react";
import "./Divider/MainPage.css";
import "../../fonts/fontStyles.css";
import Features from "./Divider/Features";
// import Testimonials from "../SamePages/Testimonials";
import AccessSection from "../SamePages/AccessSection";
import MediaSection from "./Divider/MediaSection";
import FAQ from "../SamePages/FAQ";
import ServiceSection from "./Divider/ServiceSection";
import QRCode from "../SamePages/QRCode";
import FormSection from "../../pages/FormPage/FormSection";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <main className="main-page">
      <div>
        <Features
          openFormModal={toggleModal}
        />
        {isModalOpen && <FormSection toggleModal={toggleModal} />}
      </div>
      {/* <Testimonials /> */}
      <div>
        <ServiceSection openFormModal={toggleModal} />
        {isModalOpen && <FormSection toggleModal={toggleModal} />}
      </div>
      <div>
        <AccessSection openFormModal={toggleModal} />
        {isModalOpen && <FormSection toggleModal={toggleModal} />}
      </div>
      <MediaSection />
      <FAQ />
      <QRCode />
    </main>
  );
};

export default MainPage;
