import React, { useState } from 'react';
import grid1 from '../assets/grid1.png';
import mern from '../assets/mern.png';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Earth from '../components/Earth';
import { useMediaQuery } from 'react-responsive';
import HeroButton from '../components/HeroButton';
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png';
import { ToastContainer, toast } from 'react-toastify';

export default function About({ref}) {

    const isMobile = useMediaQuery({maxWidth:"768px"});


    const email = "sangamkarmanikanta@gmail.com";
    const [isCopied,setIsCopied] = useState(false);
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
     
    };
    const scrollToSection = (section) => {
      const element = document.getElementById(section);
      if (element) {
          const offset = element.offsetTop;
          window.scrollTo({
              top: offset - 50, // Adjust offset as needed (e.g., -50 for a slight upward scroll)
              behavior: 'smooth',
          });
      } 
  };
  return (
    <section ref={ref} id='about' className="container-fluid h-100 mt-5">
      <h2 className='mb-5 mx-3'>About me</h2>
      <div className="row h-100">
        {/* Left Column */}
        <div className="col-md-8 col-lg-8 col-sm-12 d-flex flex-column">
          {/* Top Row with Two Boxes */}
          <div className="row flex-grow-1 g-4">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="w-100 " style={{backgroundColor: 'rgba(109, 109, 111, 0.205)',borderRadius:"22px",padding:"5px"}}>
                <img
                  className="w-100 "
                  src={grid1}
                  style={{
                    objectFit: 'cover',
                    height: '236px',
                    background:"transparent",
                    borderRadius:"22px"
                  }}
                  alt="Grid 1"
                />
                <p className='mx-2' style={{background:"transparent"}}>Hi, I'm Manikanta</p>
                <p className='mx-2' style={{background:"transparent",color:"rgb(184, 182, 182)"}}>A passionate web developer with a knack for turning ideas into interactive digital experiences.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="w-100 " style={{backgroundColor: 'rgba(109, 109, 111, 0.205)',borderRadius:"22px",padding:"10px"}}>
                <img
                  className="w-100"
                  src={mern}
                  style={{
                    objectFit: 'cover',
                    height:isMobile? '200px':"205px",
                    background:"transparent",
                    
                  }}
                  alt="MERN"
                />
                <p className='mx-2' style={{background:"transparent"}}>Tech Stack</p>
                <p className='mx-2' style={{background:"transparent",color:"rgb(184, 182, 182)"}}>As a MERN developer, I build dynamic web applications using MongoDB, Express, React, and Node.js. I combine design and functionality to create responsive, user-friendly websites.</p>
              </div>
            </div>
          </div>
          {/* Bottom Full Width Box */}
          <div className="row ">
            <div className="col-12 g-4">
              <div className="w-100  " style={{backgroundColor: 'rgba(109, 109, 111, 0.205)',borderRadius:"22px",padding:"10px",marginBottom:isMobile?"25px":""}}>
                <img className='w-100' src={grid3} style={{height:isMobile?"200px":"320px",background:"transparent",}}/>
                <p className='mx-2' style={{background:"transparent"}}>My Passion for Coding</p>
              <p className='mx-2' style={{background:"transparent",color:"rgb(184, 182, 182)"}}>I love solving problems and building things through code.programming isn't just my profession- it's my passion.I enjoy exploring new technologies and enhansing my skills.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-column h-70" >
          {/* Top Box with Earth model (70% Height) */}
          <div className="flex-grow-1" style={{marginBottom:isMobile?"25px":"25px",maxHeight:"500px"}}>
            <div className="w-100  h-100" style={{objectFit: 'cover',padding:"30px",backgroundColor: 'rgba(109, 109, 111, 0.205)',borderRadius:"22px",marginBottom:isMobile?"65px":""}}>
              <Canvas style={{minHeight:"285px",maxHeight:"285px",}}>
                {/* Add camera and lighting */}
                <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={70} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                
                {/* Earth component */}
                <Earth />
              </Canvas>
              <p className='mx-2' style={{background:"transparent"}}>I'm flexible with time zone communications and locations</p>
              <p className='mx-2' style={{background:"transparent",color:"rgb(184, 182, 182)"}}>I'm base in Hyderabad, India and open to remote work worldwide.</p>
              <div className='w-100' style={{display:"flex",justifyContent:"center",background:"transparent"}}> 
              <HeroButton  name={"Contact me"} onClick={() => scrollToSection('contact')}/>
              </div>
              
            </div>
            
          </div>
          {/* Bottom Box (30% Height) */}
          <div className="flex-shrink-1">
      <div
        className="w-100 h-100 mr-2"
        style={{
          objectFit: "contain",
          backgroundColor: "rgba(109, 109, 111, 0.205)",
          borderRadius: "22px",
          marginBottom: isMobile ? "25px" : "",
        }}
      >
        <img
        className='w-100 d-flex justify-content-cente'
          src={grid4}
          style={{ height: isMobile?"270px":"200px", background: "transparent" }}
          alt="Grid"
        />
        <p className="mx-2 w-100 d-flex justify-content-center" style={{ background: "transparent" }} >
          Contact me
        </p>
        <p className="mx-2 w-100 d-flex justify-content-center" style={{ background: "transparent" }}>
        <button className='btn ' data-toggle="tooltip" data-placement="bottom" title="copy" onClick={copyToClipboard} style={{background:"transparent"}}><i className="bi bi-copy text-white"></i></button>
          {email}
        </p>
        
        
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}
