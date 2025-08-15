import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import avicennaImage from '../assets/images/cena.png';
import netagImage from '../assets/images/netaf.png';
import travelImage from '../assets/images/travel.png';
import senti from '../assets/images/senti.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌐' },
    { id: 'frontend', name: 'Frontend', icon: '💻' },
    { id: 'llm', name: 'LLM & AI', icon: '🤖' }
  ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          variants={slideFromTop}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={slideFromTop}
          >
            My Projects
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
            A showcase of my work in frontend development and AI integration
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="project-filters"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
                key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id} 
              className="project-card"
              layout
              variants={{
                hidden: { 
                  opacity: 0,
                  y: index % 2 === 0 ? -100 : 100,
                  x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
                  scale: 0.8,
                  rotateY: index % 2 === 0 ? -45 : 45
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="project-links"
                    variants={containerVariants}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: -180 },
                        visible: { 
                          opacity: 1, 
                          scale: 1, 
                          rotate: 0,
                          transition: { duration: 0.3 }
                        }
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🌐
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: 180 },
                        visible: { 
                          opacity: 1, 
                          scale: 1, 
                          rotate: 0,
                          transition: { duration: 0.3, delay: 0.1 }
                        }
                      }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      📁
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="project-content"
                variants={slideFromBottom}
              >
                <motion.h3 
                  className="project-title"
                  variants={slideFromLeft}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  variants={slideFromRight}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-technologies"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: -90 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          transition: {
                            duration: 0.3,
                            delay: techIndex * 0.1
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="projects-cta"
          variants={slideFromBottom}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={slideFromBottom}
          >
            Interested in working together?
          </motion.h3>
          <motion.p 
            variants={slideFromBottom}
          >
            I'm always open to discussing new opportunities and exciting projects.
          </motion.p>
          <motion.a
            href="#contact"
            className="cta-button"
            variants={slideFromBottom}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 10px 25px rgba(96, 165, 250, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk! 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;