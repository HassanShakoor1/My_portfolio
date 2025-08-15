import { useState, useEffect, useRef } from 'react';
import './Home.css';
import profileImage from '../assets/images/hassan.jpg';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageWrapperRef = useRef(null);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  const handleMouseMove = (e) => {
    if (!imageWrapperRef.current) return;
    
    // Get the image element's bounding rect (the actual image)
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate 3D rotation based on mouse position (max 25 degrees)
    const rotateY = (mouseX / rect.width) * 25; // Horizontal tilt
    const rotateX = (mouseY / rect.height) * -25; // Vertical tilt (negative for natural feel)
    
    // Apply 3D transform with rotation and slight forward movement
    imageWrapperRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!imageWrapperRef.current) return;
    imageWrapperRef.current.style.transform = '';
  };
  return (
    <main className="home">
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="typewriter">Hi, I'm <span className="highlight">UBAID-UL-HASSAN</span></span>
              </h1>
              <h2 className="hero-subtitle">Frontend Developer</h2>
              <p className="hero-description">
                I create beautiful, responsive, and user-friendly web applications 
                using modern technologies. Passionate about clean code and great user experiences.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <div 
                  className="profile-image-wrapper"
                  ref={imageWrapperRef}
                >
                  <img 
                    src={profileImage}
                    alt="UBAID-UL-HASSAN - Frontend Developer" 
                    className="profile-image"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: imageLoaded && !imageError ? 'block' : 'none' }}
                  />
                  
                  {(imageError || !imageLoaded) && (
                    <div className="profile-image-placeholder">
                      <div className="avatar-initials">UH</div>
                      <div className="upload-hint">
                        <span>Loading your photo...</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="image-overlay"></div>
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                  <div className="floating-element element-4"></div>
                  <div className="floating-element element-5"></div>
                  <div className="floating-element element-6"></div>
                  <div className="floating-element element-7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Home;