import React, { useState ,lazy} from 'react';
import { useMediaQuery } from 'react-responsive';
import  PortfolioImg from '../assets/3dprotfolio.png';
import Taskifyy from '../assets/taskfyy.png'
import Netflix from '../assets/netflix.png'
import ReactLogo from '../assets/react-2.svg';
import MongoDbLogo from '../assets/mongodb-icon-1.svg';
import NodeLogo from '../assets/nodejs-icon.svg';
import FirebaseIcon from '../assets/firebase-1.svg';
import BootstrapIcon from '../assets/bootstrap-5-1.svg';
import ThreejsLogo from '../assets/threejs-1.svg';


export default function MyWork() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  const workData = {
    projects: {
      project1: {
        image:PortfolioImg,
        title: '3D Portfolio',
        description:
          'I created a dynamic portfolio using React.js and Three.js to showcase my skills and projects. With interactive 3D elements and responsive design, it offers an engaging experience across all devices. Leveraging Three.js, I implemented visually appealing animations that enhance user interaction, reflecting my passion for blending design and technology.',
        link: '',
        sills:[ReactLogo,ThreejsLogo,BootstrapIcon],
      },
      project2: {
        image:Taskifyy,
        title: 'Task management system',
        description:
          'Taskify is a task management web application that helps users efficiently organize and track tasks. Built with modern technologies, it enables seamless task creation, editing, and deletion. The intuitive user interface simplifies navigation and prioritization, while its responsive design ensures usability across devices, making it a streamlined solution for enhancing productivity.',
        link: 'https://taskify4511.netlify.app/',
        sills:[ReactLogo,MongoDbLogo,NodeLogo,BootstrapIcon],
      },
      project3: {
        image: Netflix, // Placeholder for your image path
        title: 'NetFixU - Netflix Clone',
        description:
          'NetFixU is a simple clone of Netflix, featuring user authentication and a movie browsing experience. Built with React.js and Firebase, users can log in and view a curated list of movies. Future enhancements will include improved movie data integration and search functionality.',
        span:"(Desigin for desktop screens only)",
        link: 'https://netfixu.netlify.app/',
        sills:[ReactLogo,FirebaseIcon,BootstrapIcon],
      },
    
    
    },
  };

  const projects = Object.values(workData.projects);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section  id='mywork'>
      <h3 className="mt-5 mb-5 mx-4">My Work</h3>
      <div className="container-fluid w-100 d-flex justify-content-center mt-5">
        <div
          className="card "
          style={{
            width: isMobile ? '25rem' : '80rem',
            padding: isMobile?'5px':"30px",
            backgroundColor: 'rgba(109, 109, 111, 0.205)',
            minHeight:isMobile?"550px":""
          }}
        >
          <div className="card-body" style={{ background: 'transparent',}}>
          <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between',minHeight:isMobile?"500px":"250px" }}>
  
            {/* Left Section (Text) */}
            {isMobile&&<div style={{flex: isMobile ? '1 1 100%' : '1 1 40%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:isMobile?"20px":""}}>
              <img src={currentProject.image} style={{ objectFit: 'contain', height: isMobile ? '150px' : '200px' }} />
            </div>}
            <div className='w-100' style={{flex: isMobile ? '1 1 100%' : '1 1 60%', minWidth: isMobile ? '100%' : '700px'}}>
              <h5 className="card-title" style={{ color: 'white' }}>
                {currentProject.title}
              </h5>
              <p className="card-text" style={{ color: 'rgb(184, 182, 182)' }}>
                {currentProject.description}
                {currentProject.span&&<span style={{ color: 'white' }}>{currentProject.span}</span>}
              </p>
              <div style={{}}>
                {currentProject.sills.map((skill, i) => (
                  <img key={i} src={skill} style={{height: "40px",padding:"5px",backgroundColor:" rgb(81, 81, 81,0.4)" ,margin:"4px 4px 4px 4px"}}/>
                ))}
              </div>
              
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                style={{ background: "transparent", textDecoration: "none" }}
              >
                View Project
                <i className="bi bi-arrow-up-right mx-2" style={{ background: "transparent", textDecoration: "none" }}></i>
              </a>
            </div>

            {/* Right Section (Image) */}
            {!isMobile&&<div style={{flex: isMobile ? '1 1 100%' : '1 1 40%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:isMobile?"20px":""}}>
              <img src={currentProject.image} style={{ objectFit: 'contain', height: isMobile ? '150px' : '200px' }} />
            </div>}

          </div>

            
            
            
            <div className="mt-4 d-flex justify-content-between" style={{ background: 'transparent' }}>
            <button
                className="btn"
                onClick={previousProject}
                style={{
                backgroundColor: 'rgba(28, 28, 33, 1)',
                borderRadius: '100%',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Add shadow here
                }}
            >
                <i className="bi bi-arrow-left-short fs-3" style={{ background: 'transparent', color: 'white' }}></i>
            </button>
            <button
                className="btn"
                onClick={nextProject}
                style={{
                backgroundColor: 'rgba(28, 28, 33, 1)',
                borderRadius: '100%',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Add shadow here
                }}
            >
                <i className="bi bi-arrow-right-short fs-3" style={{ background: 'transparent', color: 'white' }}></i>
            </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
