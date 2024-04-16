// src/components/Layout/Layout.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        {children} {/* This is where the page-specific content will go */}
      <Footer />
    </>
  );
};

export default Layout;
