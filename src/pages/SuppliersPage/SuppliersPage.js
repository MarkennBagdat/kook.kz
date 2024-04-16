// src/pages/HomePage/HomePage.js
import React from "react";
import './Divider/suppliersPage.css'
import SuplierSection from "./Divider/SuplierSection";
import ConditionsSection from "./Divider/ConditionsSection";
import IntegrationSection from "./Divider/IntegrationSection";
import OrderSection from "./Divider/OrderSection";
import NotificationSection from "./Divider/NotificationSection";
import AccessSection from "./Divider/AccessSection";
import FAQ from "./Divider/FAQ";
import Testimonials from "./Divider/Testimonials";


const SuppliersPage = () => {
  return (
    <main className="suppliers-page">
      <SuplierSection />
      <ConditionsSection/>
      <IntegrationSection />
      <OrderSection />
      <NotificationSection />
      <Testimonials />
      <AccessSection />
      <FAQ />
    </main>
  );
};

export default SuppliersPage;
