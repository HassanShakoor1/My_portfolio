import React, { useState } from 'react';
import './Projects.css';
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
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Showcasing my work in frontend development and LLM engineering
          </p>
        </div>



        {/* Filter Tabs */}
        <div className="filter-section">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" data-single={filteredProjects.length === 1}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{'--delay': `${index * 0.1}s`}}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">🔗</span>
                        Live Demo
                      </a>
                      {project.githubUrl !== '#' && (
                        <a href={project.githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                          <span className="link-icon">📁</span>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>Interested in My Work?</h3>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;