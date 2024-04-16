// src/pages/HomePage/HomePage.js
import React from "react";
import './Divider/AboutPage.css'
import LinkSection from "./Divider/LinkSection";
import DescriptionSection from "./Divider/DescriptionSection";
import TeamSection from "./Divider/TeamSection";
import TitleSection from "./Divider/TitleSection";
import AccessSection from "./Divider/AccessSection";


const AboutPage = () => {
  return (
    <main className="about-page">
      <LinkSection />
      <DescriptionSection/>
      <TeamSection />
      <TitleSection />
      <AccessSection />
    </main>
  );
};

export default AboutPage;
