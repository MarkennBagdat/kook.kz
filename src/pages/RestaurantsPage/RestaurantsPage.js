// MainPage.js
import React from "react";
import { useState } from "react";
import "./Divider/restaurantsPage.css";
import MainSection from "./Divider/MainSection";
import SaveTimeSection from "./Divider/SaveTimeSection";
import FindProductsSection from "./Divider/FindProductsSection"; // Placeholder for finding products section
import EnsureTransparencySection from "./Divider/EnsureTransparencySection";
import BeSureSection from "./Divider/BeSureSection";
import AccessSection from "../SamePages/AccessSection";
import FAQ from "../SamePages/FAQ";
import Testimonials from "../SamePages/Testimonials";
import QRCode from "../SamePages/QRCode";
import "../MainPage/Divider/MainPage.css";

const RestaurantsPage = () => {
  return (
    <main className="restaurants-page">
      <MainSection />
      <SaveTimeSection />
      <FindProductsSection />
      <EnsureTransparencySection />
      <BeSureSection />
      <Testimonials />
      <AccessSection />
      <FAQ />
      <QRCode/>
    </main>
  );
};

export default RestaurantsPage;
