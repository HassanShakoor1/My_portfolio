import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';
import avicennaImage from '../assets/images/cena.png';
import netagImage from '../assets/images/netaf.png';
import travelImage from '../assets/images/travel.png';
import senti from '../assets/images/senti.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Avicenna Enterprise Solutions',
      category: 'frontend',
      image: avicennaImage,
      description: 'Enterprise web application built during my time at Avicenna Enterprise Solutions, featuring modern UI/UX and business management capabilities.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Enterprise Solutions'],
      liveUrl: 'https://app.avicennaenterprise.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Netag Application',
      category: 'frontend',
      image: netagImage,
      description: 'Modern web application with clean design and responsive interface, showcasing advanced frontend development skills.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Vercel'],
      liveUrl: 'https://netag.vercel.app/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'World Travel Website',
      category: 'frontend',
      image: travelImage,
      description: 'Beautiful travel website featuring destination showcases, adventure sections, and responsive design. Built with modern web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
      liveUrl: 'https://64c440ac61f7c90fca30c806--glistening-ganache-229da0.netlify.app/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Sentiment Analysis App',
      category: 'llm',
      image: senti,
      description: 'Advanced sentiment analysis application with AI chatbot integration that analyzes text emotions and provides detailed insights. Built with modern React and LLM technology.',
      technologies: ['React', 'LLM', 'AI Chatbot', 'Sentiment Analysis', 'Vercel'],
      liveUrl: 'https://sentiment-iota.vercel.app/home',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'frontend', label: 'Frontend', icon: '💻' },
    { id: 'llm', label: 'AI & LLM', icon: '🤖' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Header */}
        <AnimatedSection direction="up" className="projects-header">
          <AnimatedText as="h2" className="section-title" stagger={0.1}>
            My Projects
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
            Showcasing my work in frontend development and LLM engineering
          </motion.p>
        </AnimatedSection>



        {/* Filter Tabs */}
        <AnimatedSection direction="up" delay={0.2} className="filter-section">
          <div className="filter-tabs">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="tab-icon"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {category.icon}
                </motion.span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid" 
            data-single={filteredProjects.length === 1}
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.2 }
                }}
                layout
              >
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="project-links"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <motion.a 
                        href={project.liveUrl} 
                        className="project-link live-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="link-icon">🔗</span>
                        Live Demo
                      </motion.a>
                      {project.githubUrl !== '#' && (
                        <motion.a 
                          href={project.githubUrl} 
                          className="project-link github-link" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="link-icon">📁</span>
                          GitHub
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="project-content">
                  <motion.h4 
                    className="project-title"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p 
                    className="project-description"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="project-technologies"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.1 + (index * 0.1) + (techIndex * 0.05),
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={0.8} className="projects-cta">
          <AnimatedText as="h3" stagger={0.1}>
            Interested in My Work?
          </AnimatedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Let's discuss how I can help bring your ideas to life
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;