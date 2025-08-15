import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset animation state after scroll
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  const rocketVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotate: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.1,
      rotate: -10,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    click: {
      scale: 0.9,
      rotate: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    launch: {
      y: -1000,
      scale: 0.5,
      rotate: 0,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: "easeIn"
      }
    }
  };

  const flameVariants = {
    idle: {
      scaleY: 1,
      opacity: 0.8
    },
    hover: {
      scaleY: 1.3,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.3
      }
    },
    launch: {
      scaleY: 2,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="back-to-top"
          variants={rocketVariants}
          initial="hidden"
          animate={isClicked ? "launch" : "visible"}
          exit="hidden"
          whileHover="hover"
          whileTap="click"
          onClick={scrollToTop}
        >
          {/* Sparkles around rocket */}
          <motion.div className="sparkle sparkle-1" variants={sparkleVariants} initial="hidden" animate="visible">
            ✨
          </motion.div>
          <motion.div className="sparkle sparkle-2" variants={sparkleVariants} initial="hidden" animate="visible">
            ⭐
          </motion.div>
          <motion.div className="sparkle sparkle-3" variants={sparkleVariants} initial="hidden" animate="visible">
            ✨
          </motion.div>
          <motion.div className="sparkle sparkle-4" variants={sparkleVariants} initial="hidden" animate="visible">
            💫
          </motion.div>

          {/* Rocket body */}
          <div className="rocket">
            <div className="rocket-body">
              🚀
            </div>
            
            {/* Rocket flame */}
            <motion.div 
              className="rocket-flame"
              variants={flameVariants}
              initial="idle"
              animate={isClicked ? "launch" : "idle"}
              whileHover="hover"
            >
              <div className="flame-inner">🔥</div>
            </motion.div>
          </div>

          {/* Tooltip */}
          <motion.div 
            className="rocket-tooltip"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Blast off to top! 🚀
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;