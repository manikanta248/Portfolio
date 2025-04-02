import { Canvas, extend } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
import CanvasLoader from '../components/canvasLoader';
import { Leva } from 'leva';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useMediaQuery } from 'react-responsive';
import HeroCamera from '../components/HeroCamera';
import HeroButton from '../components/HeroButton';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';  // Enable OrbitControls

// Lazy load components
const HackerRoom = lazy(() => import('./HackerRoom'));
const Target = lazy(() => import('../components/Target'));
const Rocket = lazy(() => import('../components/Rocket'));
const MirrorSphere = lazy(() => import('../components/Sphere.jsx'));
const Cube = lazy(() => import('../components/Cube.jsx'));
const Sun = lazy(() => import('../components/sun.jsx'));

// Extend Three.js to include SVGLoader
extend({ SVGLoader });

export default function Hero({ref}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
    <section id='hero' className="hero position-relative" style={{ width: "100vw", maxWidth: "90vw", overflow: "hidden", height: "100vh" }}>
      <div className={`hero-details w-100 justify-content-center ${isMobile?"mx-4":"mx-5"}`}>
        <p className="hero-title ">
          Hi, I am Manikanta <span className="hi-emoji">👋</span>
        </p>
        <p className="hero-tag w-100 justify-content-center">Full Stack Developer</p>
      </div>

      <div className="position-absolute" style={{ top: 0, left: 0, width: "100vw", height: "100vh" }}>
        <Leva />
        <Canvas className="" style={{ width: "100vw", height: "100vh" }}>
          <ambientLight intensity={1} />
          <directionalLight position={[-50, 0, -70]} intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          
          {/* Lazy load 3D components */}
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <Suspense fallback={<CanvasLoader />}>
                <HackerRoom scale={isMobile ? 0.05 : 0.11} position={isMobile ? [0.5, -5, 6] : [1, -9, 0]} rotation={[0.1, 9.45, 0]} />
              </Suspense>

              <group>
                <Suspense >
                  <Target />
                </Suspense>
                <Suspense >
                  <Rocket position={isMobile ? [-4.2, 6.5, 5] : [-18, 0, 10]} rotation={isMobile ? [4.2, 0, 0] : [5.5, 0, 0]} />
                </Suspense>
                <Suspense >
                  <MirrorSphere position={isMobile ? [0, 2, 0] : [-15, 5, 0]} />
                </Suspense>
                {!isMobile && (
                  <Suspense >
                    <Cube position={[25, 0, -25]} />
                  </Suspense>
                )}
                {!isMobile && (
                  <Suspense >
                    <Sun position={[-100, 0, -150]} />
                  </Suspense>
                )}
              </group>
            </HeroCamera>
          </Suspense>
        </Canvas>

        <div style={{
          position: "absolute",
          bottom: "20px", 
          width: "100vw",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}>
          <HeroButton name={"Let's work together"} onClick={()=>scrollToSection('contact')}/>
        </div>
      </div>
    </section>
  );
}
