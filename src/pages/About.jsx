import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';

const About = () => {
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
    <section className="about" id="about">
      <div className="container">
        {/* Header */}
        <AnimatedSection direction="up" className="about-header">
          <AnimatedText as="h2" className="section-title" stagger={0.1}>
            About Me
          </AnimatedText>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Frontend Developer & LLM Engineer with 1.5+ years of experience at leading tech companies
          </motion.p>
        </AnimatedSection>

        <div className="about-content">
          {/* Personal Info */}
          <div className="about-info">
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div 
                  className="info-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                >
                  👨‍💻
                </motion.div>
                <AnimatedText as="h3" stagger={0.08}>
                  Who I Am
                </AnimatedText>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Hi! I'm <span className="highlight-text">HASSAN SHAKOOR</span>, a passionate Frontend Developer 
                  and LLM Engineer with 1.5 years of hands-on experience in creating beautiful, responsive, 
                  and user-friendly web applications.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Currently working at <strong>Hubble42 Inc.</strong> as a Frontend Developer and LLM Engineer, 
                  I specialize in modern web technologies and model training. My journey spans from 
                  <strong>Avicenna Enterprise Solutions</strong> to my current role, driven by 
                  curiosity and a passion for cutting-edge technology.
                </motion.p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div 
                  className="info-icon"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                >
                  🎯
                </motion.div>
                <AnimatedText as="h3" stagger={0.08}>
                  What I Do
                </AnimatedText>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  I create modern web applications using <strong>React</strong>, <strong>JavaScript</strong>, 
                  and <strong>Firebase</strong>, while also working with <strong>Large Language Models</strong> 
                  and model training. My focus is on writing clean, maintainable code and 
                  delivering exceptional user experiences with custom model integration.
                </motion.p>
                <motion.div 
                  className="specialties"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  {['Frontend Development', 'LLM Engineering', 'React Development', 'Model Training', 'Responsive Design'].map((specialty, index) => (
                    <motion.span 
                      key={specialty}
                      className="specialty"
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + (index * 0.1), type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Skills Section */}
          <AnimatedSection direction="up" delay={0.6} className="skills-section">
            <AnimatedText as="h3" className="skills-title" stagger={0.1}>
              Technical Skills
            </AnimatedText>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + (index * 0.1),
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="skill-header">
                    <motion.span 
                      className="skill-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {skill.icon}
                    </motion.span>
                    <motion.span 
                      className="skill-name"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {skill.name}
                    </motion.span>
                  </div>
                  <div className="skill-progress">
                    <motion.div 
                      className="skill-bar" 
                      style={{ '--color': skill.color }}
                      initial={{ '--width': '0%' }}
                      whileInView={{ '--width': `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 1.3 + (index * 0.1), ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="skill-percentage"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.8 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Experience Timeline */}
          <AnimatedSection direction="up" delay={0.8} className="experience-section">
            <AnimatedText as="h3" className="experience-title" stagger={0.1}>
              Experience Journey
            </AnimatedText>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <AnimatedSection 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={1.0 + (index * 0.3)}
                  className="timeline-item"
                >
                  <motion.div 
                    className="timeline-marker"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + (index * 0.3), type: "spring" }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <div className="timeline-content">
                    <motion.div 
                      className="timeline-period"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 + (index * 0.3) }}
                      viewport={{ once: true }}
                    >
                      {exp.period}
                    </motion.div>
                    <motion.h4 
                      className="timeline-title"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + (index * 0.3) }}
                      viewport={{ once: true }}
                    >
                      {exp.title}
                    </motion.h4>
                    <motion.div 
                      className="timeline-company"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + (index * 0.3) }}
                      viewport={{ once: true }}
                    >
                      {exp.company}
                    </motion.div>
                    <motion.p 
                      className="timeline-description"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + (index * 0.3) }}
                      viewport={{ once: true }}
                    >
                      {exp.description}
                    </motion.p>
                    <motion.div 
                      className="timeline-technologies"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.7 + (index * 0.3) }}
                      viewport={{ once: true }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 1.8 + (index * 0.3) + (techIndex * 0.05),
                            type: "spring"
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -3 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>


      </div>
    </section>
  );
};

export default About;