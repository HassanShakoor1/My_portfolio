import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="home">
      <section className="hero" id="home">
        <div className="container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-text" variants={textVariants}>
              <motion.h1 
                className="hero-title"
                variants={textVariants}
              >
                <span className="typewriter">Hi, I'm <span className="highlight">HASSAN SHAKOOR</span></span>
              </motion.h1>
              <motion.h2 
                className="hero-subtitle"
                variants={textVariants}
              >
                Frontend Developer
              </motion.h2>
              <motion.p 
                className="hero-description"
                variants={textVariants}
              >
                I create beautiful, responsive, and user-friendly web applications 
                using modern technologies. Passionate about clean code and great user experiences.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                variants={buttonVariants}
              >
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div className="hero-image" variants={imageVariants}>
              <div className="profile-image-container">
                <motion.div 
                  className="profile-image-wrapper"
                  ref={imageWrapperRef}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
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
                <motion.div 
                  className="floating-elements"
                  variants={floatingVariants}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <motion.div 
                      key={num}
                      className={`floating-element element-${num}`}
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: -180 },
                        visible: { 
                          opacity: 1, 
                          scale: 1, 
                          rotate: 0,
                          transition: { 
                            duration: 0.8,
                            delay: num * 0.1,
                            ease: "easeOut"
                          }
                        }
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4 + num * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;