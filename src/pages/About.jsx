import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideFromLeft = {
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

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    {
      name: 'HTML5',
      level: 90,
      icon: '🌐',
      color: '#e34c26'
    },
    {
      name: 'CSS3',
      level: 85,
      icon: '🎨',
      color: '#1572b6'
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: '⚡',
      color: '#f7df1e'
    },
    {
      name: 'React',
      level: 85,
      icon: '⚛️',
      color: '#61dafb'
    },
    {
      name: 'Firebase',
      level: 75,
      icon: '🔥',
      color: '#ffca28'
    }
  ];

  const experiences = [
    {
      period: 'November 2024 - Present',
      title: 'Frontend Developer & LLM Engineer',
      company: 'Hubble42 Inc.',
      description: 'Currently working as a Frontend Developer and LLM Engineer, developing cutting-edge web applications and training custom models. Building modern interfaces while working with Large Language Models and model training technologies.',
      technologies: ['React', 'JavaScript', 'LLM', 'Model Trainer', 'CSS3', 'Firebase']
    },
    {
      period: 'June 2024 - November 2024',
      title: 'Frontend Developer',
      company: 'Avicenna Enterprise Solutions',
      description: 'Worked as a Frontend Developer creating responsive web applications and user interfaces. Developed modern, scalable solutions using React and JavaScript, focusing on clean code and optimal user experiences.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Frontend Development']
    }
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="about-header"
          variants={slideFromTop}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={slideFromTop}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="section-divider"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: "100px",
                transition: { duration: 0.8, delay: 0.5 }
              }
            }}
          ></motion.div>
          <motion.p 
            className="section-subtitle"
            variants={slideFromTop}
          >
            Frontend Developer & LLM Engineer with 1.5+ years of experience at leading tech companies
          </motion.p>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Personal Info */}
          <motion.div className="about-info" variants={containerVariants}>
            <motion.div 
              className="info-card"
              variants={slideFromLeft}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="info-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>
              <h3>Who I Am</h3>
              <p>
                Hi! I'm <span className="highlight-text">HASSAN SHAKOOR</span>, a passionate Frontend Developer 
                and LLM Engineer with 1.5 years of hands-on experience in creating beautiful, responsive, 
                and user-friendly web applications.
              </p>
              <p>
                Currently working at <strong>Hubble42 Inc.</strong> as a Frontend Developer and LLM Engineer, 
                I specialize in modern web technologies and model training. My journey spans from 
                <strong>Avicenna Enterprise Solutions</strong> to my current role, driven by 
                curiosity and a passion for cutting-edge technology.
              </p>
            </motion.div>

            <motion.div 
              className="info-card"
              variants={slideFromRight}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="info-icon"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🎯
              </motion.div>
              <h3>What I Do</h3>
              <p>
                I create modern web applications using <strong>React</strong>, <strong>JavaScript</strong>, 
                and <strong>Firebase</strong>, while also working with <strong>Large Language Models</strong> 
                and model training. My focus is on writing clean, maintainable code and 
                delivering exceptional user experiences with custom model integration.
              </p>
              <motion.div 
                className="specialties"
                variants={containerVariants}
              >
                {['Frontend Development', 'LLM Engineering', 'React Development', 'Model Training', 'Responsive Design'].map((specialty, index) => (
                  <motion.span 
                    key={specialty}
                    className="specialty"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1
                        }
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {specialty}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="skills-section"
            ref={skillsRef}
            variants={slideFromBottom}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="skills-title"
              variants={slideFromBottom}
            >
              Technical Skills
            </motion.h3>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-card" 
                  style={{'--delay': `${index * 0.1}s`}}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 50,
                      rotateX: -90
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="skill-header">
                    <motion.span 
                      className="skill-icon"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-progress">
                    <motion.div 
                      className="skill-bar" 
                      style={{
                        '--color': skill.color
                      }}
                      variants={{
                        hidden: { '--width': '0%' },
                        visible: { 
                          '--width': `${skill.level}%`,
                          transition: {
                            duration: 1.5,
                            delay: index * 0.2 + 0.5,
                            ease: "easeOut"
                          }
                        }
                      }}
                    >
                      <motion.span 
                        className="skill-percentage"
                        initial={{ opacity: 0 }}
                        animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            className="experience-section"
            ref={experienceRef}
            variants={slideFromTop}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="experience-title"
              variants={slideFromTop}
            >
              Experience Journey
            </motion.h3>
            <motion.div 
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              animate={experienceInView ? "visible" : "hidden"}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item" 
                  style={{'--delay': `${index * 0.2}s`}}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: index % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: index * 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="timeline-marker"
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          duration: 0.5, 
                          delay: index * 0.3 + 0.2 
                        }
                      }
                    }}
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <div className="timeline-content">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                    <motion.div 
                      className="timeline-technologies"
                      variants={containerVariants}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="tech-tag"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { 
                              opacity: 1, 
                              scale: 1,
                              transition: {
                                duration: 0.3,
                                delay: techIndex * 0.1
                              }
                            }
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;