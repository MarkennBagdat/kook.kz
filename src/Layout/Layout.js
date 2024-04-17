// src/components/Layout/Layout.js
import React, { useState }from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Footer from '../components/Footer/Footer';
import FormSection from "../pages/FormPage/FormSection";


const Layout = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
       <div>
      <Navbar onFreeTrialClick={toggleModal} />
      {isModalOpen && <FormSection toggleModal={toggleModal} />}
    </div>
        {children} {/* This is where the page-specific content will go */}
      <Footer />
    </>
  );
};

export default Layout;
