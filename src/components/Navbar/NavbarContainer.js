// Import necessary components and styles
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import FormSection from "../../pages/FormPage/FormSection";

function NavbarContainer() {
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen);
    };

    const toggleLoginDropdown = () => {
        setIsLoginDropdownOpen(!isLoginDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <Navbar
                isContactDropdownOpen={isContactDropdownOpen}
                isLoginDropdownOpen={isLoginDropdownOpen}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleContactDropdown={toggleContactDropdown}
                toggleLoginDropdown={toggleLoginDropdown}
                toggleMobileMenu={toggleMobileMenu}
                openFormModal={toggleModal}
            />
            {isModalOpen && <FormSection toggleModal={toggleModal} />}
        </>
    );
}

export default NavbarContainer;
