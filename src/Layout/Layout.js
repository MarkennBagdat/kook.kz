// src/components/Layout/Layout.js
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import FormSection from "../pages/FormPage/FormSection";
import NavbarContainer from "../components/Navbar/NavbarContainer";

const Layout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <header>
                <NavbarContainer onFreeTrialClick={toggleModal} />
                {isModalOpen && <FormSection toggleModal={toggleModal} />}
            </header>

            {children} {/* This is where the page-specific content will go */}

            <Footer />
        </>
    );
};

export default Layout;
