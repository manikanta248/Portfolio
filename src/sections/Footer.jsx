import React from 'react';
import { useMediaQuery } from 'react-responsive';


export default function Footer() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    // Style for social media icons
const iconStyle = {
    backgroundColor: 'rgba(28, 28, 33, 1)',
    borderRadius: '100%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    padding: '13px',
    fontSize:isMobile?"0.7rem":"", // Increase size of the icons if needed
    margin: isMobile ? '5px' : '0', // Space between icons for mobile
};

    return (
        
        <section>
            <hr />
            <div className={``} style={{ padding: '20px',display:"flex",justifyContent:isMobile?'':"space-between" }}>
                {/* Terms & Conditions and Privacy Policy */}
                <div className={`d-flex `} style={{fontSize:isMobile?"0.7rem":""}}>
                    <p className={`${isMobile?"":"mx-3"}`} style={{ color: 'rgb(184, 182, 182)' }}>Terms & Conditions</p>
                    {!isMobile&&<div style={{ width: '1px', backgroundColor: 'rgb(184, 182, 182)', height: '33px' }} />}
                    <p className= {`${isMobile?"mx-2":"mx-3"}`} style={{ color: 'rgb(184, 182, 182)' }}>Privacy Policy</p>
                </div>

                {/* Social Media Icons */}
                <div className={``} >
                    <i className="bi bi-facebook" style={iconStyle}></i>
                    <i className="bi bi-twitter-x mx-3" style={iconStyle}></i>
                    <i className="bi bi-linkedin" style={iconStyle}></i>
                </div>

                {/* Copyright */}
                {!isMobile&&<div className={`${isMobile ? 'mt-3' : ''}`}>
                    <p style={{ color: 'rgb(184, 182, 182)', marginRight: '30px' }}>© 2024 Manikanta. All rights reserved.</p>
                </div>}
            </div>
            {isMobile&&<div className={`${isMobile ? 'w-100 d-flex justify-content-center' : 'mt-3'}`}>
                    <p style={{ color: 'rgb(184, 182, 182)', marginRight: '30px' }}>© 2024 Manikanta. All rights reserved.</p>
                </div>}
        </section>
    );
    
}

