import React, { useState, useEffect } from 'react';
import menuImg from '../assets/menu.svg';
import closeMenuImg from '../assets/close.svg';
import { navLinks } from '../constants';

export default function Navbar({ }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);
    const [isOpen, setIsOpen] = useState(false);

    // Dynamically track window resizing to update isSmallScreen
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 750);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const scrollToSection = (section) => {
        console.log(`Scrolling to section: ${section}`); // Debugging line
        const element = document.getElementById(section);
        if (element) {
            const offset = element.offsetTop;
            console.log(`Element offsetTop: ${offset}`); // Log the offset position
            window.scrollTo({
                top: offset - 50, // Adjust offset as needed (e.g., -50 for a slight upward scroll)
                behavior: 'smooth',
            });
        } else {
            console.error(`Element with ID "${section}" not found.`); // Log an error if the element is not found
        }
    };
    
    
    
    const NavItems = () => (
        <ul className='nav-list'>
            {navLinks.map((link, index) => (
                <li key={index} className='nav-item'>
                    <a
                        href="#"
                        className='nav-link'
                        onClick={() => {
                            if (link.name === 'Hero') {
                                scrollToSection('hero');
                            } else if (link.name === 'About') {
                                scrollToSection('about');
                            } else if (link.name === 'Work') {
                                scrollToSection('mywork');
                            } else if (link.name === 'Contact') {
                                scrollToSection('contact');
                            }
                            if (isSmallScreen) {
                                setIsOpen(false); // Close the menu on small screens
                            }
                        }}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <div className='navbar-container'>
            <div className='container'>
                <div className='navbar-content'>
                    <a href='/' className='navbar-brand'>
                        Manikanta
                    </a>
                    {isSmallScreen && (
                        <button className='menu-btn' type='button' onClick={toggleMenu}>
                            <img
                                src={isOpen ? closeMenuImg : menuImg}
                                alt='toggle menu'
                                className='menu-icon'
                            />
                        </button>
                    )}
                    {!isSmallScreen && <NavItems />}
                </div>

                {isSmallScreen && isOpen && (
                    <nav className='mobile-nav'>
                        <NavItems />
                    </nav>
                )}
            </div>
        </div>
    );
}
