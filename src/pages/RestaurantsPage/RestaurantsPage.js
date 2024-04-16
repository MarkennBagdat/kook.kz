// MainPage.js
import React from "react";
import "./Divider/restaurantsPage.css";
import MainSection from "./Divider/MainSection";
import SaveTimeSection from "./Divider/SaveTimeSection";
import FindProductsSection from "./Divider/FindProductsSection"; // Placeholder for finding products section
import EnsureTransparencySection from "./Divider/EnsureTransparencySection";
import BeSureSection from "./Divider/BeSureSection";
import AccessSection from "./Divider/AccessSection";
import FAQ from "./Divider/FAQ";
import Testimonials from "./Divider/Testimonials";

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
    </main>
  );
};

export default RestaurantsPage;
