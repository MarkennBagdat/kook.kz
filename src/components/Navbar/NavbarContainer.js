// Import necessary components and styles
import React, { useState, useEffect } from 'react';
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
        if (isContactDropdownOpen) setIsContactDropdownOpen(!isContactDropdownOpen);
        if (isLoginDropdownOpen) setIsLoginDropdownOpen(!isLoginDropdownOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        function handleOutsideClick(event) {
            if (!event.target.closest('.navbar')) {
                setIsContactDropdownOpen(false);
                setIsLoginDropdownOpen(false);
                setIsMobileMenuOpen(false);
            }
        }

        if (isContactDropdownOpen || isLoginDropdownOpen || isMobileMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isContactDropdownOpen, isLoginDropdownOpen, isMobileMenuOpen]);


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
