import React, { useRef } from 'react';
import Navbar from './sections/Navbar';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import MyWork from './sections/MyWork';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const myworkRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main style={{ color: "white" }}>
            <Navbar 
                heroRef={heroRef} 
                aboutRef={aboutRef} 
                myworkRef={myworkRef} 
                contactRef={contactRef} 
                scrollToSection={scrollToSection} 
            />
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <MyWork ref={myworkRef} />
            <Contact ref={contactRef} />
            <Footer />
        </main>
    );
}
