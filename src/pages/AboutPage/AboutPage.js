// src/pages/HomePage/HomePage.js
import { useState } from "react";
import React from "react";
import './Divider/AboutPage.css'
import LinkSection from "./Divider/LinkSection";
import DescriptionSection from "./Divider/DescriptionSection";
import TitleSection from "./Divider/TitleSection";
import QRCode from "../SamePages/QRCode";



const AboutPage = () => {
  return (
    <main className="about-page">
      <LinkSection />
      <DescriptionSection/>
      <TitleSection />
      <QRCode/>
    </main>
  );
};

export default AboutPage;
