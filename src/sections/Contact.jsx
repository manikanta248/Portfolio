import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Contact({}) {
    const isMobile = useMediaQuery({ maxWidth: '768px' });
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mdkonbjq', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSent(true);
                setError(false);
                setFormData({ fullName: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send the message');
            }
        } catch (err) {
            console.error('Error:', err);
            setIsSent(false);
            setError(true);
        }
    };

    return (
        <section id='contact' className='d-flex justify-content-center mt-4 mb-4' style={{ borderRadius: '22px' }}>
            <div
                className='d-flex justify-content-center'
                style={{
                    backgroundColor: 'rgba(109, 109, 111, 0.205)',
                    padding: isMobile ? '20px' : '70px',
                    borderRadius: '22px',
                    width: isMobile ? '95%' : '1000px',
                }}
            >
                <form onSubmit={handleSubmit} style={{ width: isMobile ? '100%' : '100%' }}>
                    <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem' }}>Let's talk</h2>
                    <p style={{ color: 'rgb(184, 182, 182)', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>
                    <div className='d-flex justify-content-center w-100'>
                        <div style={{ width: isMobile ? '100%' : '60%' }}>
                            <p>Full name</p>
                            <input
                                className="text mb-3"
                                type="text"
                                name="fullName"
                                placeholder="ex: John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    backgroundColor: 'rgba(142, 142, 144, 0.205)',
                                    border: 'none',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                                    padding: '10px',
                                    borderRadius: '7px',
                                    color: 'rgb(184, 182, 182)',
                                    marginBottom: isMobile ? '15px' : '20px',
                                }}
                            />
                            <p>Email address</p>
                            <input
                                className="text mb-3"
                                type="email"
                                name="email"
                                placeholder="ex: john.doe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    backgroundColor: 'rgba(142, 142, 144, 0.205)',
                                    border: 'none',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                                    padding: '10px',
                                    borderRadius: '7px',
                                    color: 'rgb(184, 182, 182)',
                                    marginBottom: isMobile ? '15px' : '20px',
                                }}
                            />
                            <p>Your message</p>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    backgroundColor: 'rgba(142, 142, 144, 0.205)',
                                    border: 'none',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                                    padding: '10px',
                                    borderRadius: '7px',
                                    color: 'rgb(184, 182, 182)',
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-center mt-4'>
                        <button
                            type='submit'
                            className='btn'
                            style={{
                                backgroundColor: 'rgba(28, 28, 33, 1)',
                                width: isMobile?'100%':"60%",
                                color: 'white',
                                padding: '12px 0',
                                borderRadius: '7px',
                            }}
                        >
                            Send message
                            <i className="bi bi-arrow-up-right mx-2"></i>
                        </button>
                    </div>
                    <div className='w-100 d-flex justify-content-center mt-4'>
                        {isSent && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                        {error && <p style={{ color: 'red' }}>Failed to send the message, please try again.</p>}
                    </div>
                    
                </form>
            </div>
        </section>
    );
}
