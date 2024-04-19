// src/pages/HomePage/HomePage.js
import React from "react";
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


const SuppliersPage = () => {
  return (
    <main className="suppliers-page">
      <SuplierSection />
      <ConditionsSection />
      <IntegrationSection />
      <OrderSection />
      <NotificationSection />
      {/* <Testimonials /> */}
      <AccessSection />
      <FAQ />
      <QRCode/>
    </main>
  );
};

export default SuppliersPage;
