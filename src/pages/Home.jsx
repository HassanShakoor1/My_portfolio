import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import profileImage from '../assets/images/hassan.jpg';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';

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
            <AnimatedSection direction="left" delay={0.2} className="hero-text">
              <AnimatedText 
                as="h1" 
                className="hero-title" 
                delay={0.4}
                stagger={0.15}
              >
                Hi, I'm <span className="highlight">HASSAN SHAKOOR</span>
              </AnimatedText>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Frontend Developer
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                I create beautiful, responsive, and user-friendly web applications 
                using modern technologies. Passionate about clean code and great user experiences.
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.4} className="hero-image">
              <div className="profile-image-container">
                <motion.div 
                  className="profile-image-wrapper"
                  ref={imageWrapperRef}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <img 
                    src={profileImage}
                    alt="HASSAN SHAKOOR - Frontend Developer" 
                    className="profile-image"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: imageLoaded && !imageError ? 'block' : 'none' }}
                  />
                  
                  {(imageError || !imageLoaded) && (
                    <div className="profile-image-placeholder">
                      <div className="avatar-initials">HS</div>
                      <div className="upload-hint">
                        <span>Loading your photo...</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="image-overlay"></div>
                </motion.div>
                
                <div className="floating-elements">
                  {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                    <motion.div 
                      key={num}
                      className={`floating-element element-${num}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.5 + (index * 0.1),
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Home;