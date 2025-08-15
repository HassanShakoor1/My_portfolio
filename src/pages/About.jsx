import React from 'react';
import './About.css';

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
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Frontend Developer & LLM Engineer with 1.5+ years of experience at leading tech companies
          </p>
        </div>

        <div className="about-content">
          {/* Personal Info */}
          <div className="about-info">
            <div className="info-card">
              <div className="info-icon">👨‍💻</div>
              <h3>Who I Am</h3>
              <p>
                Hi! I'm <span className="highlight-text">UBAID-UL-HASSAN</span>, a passionate Frontend Developer 
                and LLM Engineer with 1.5 years of hands-on experience in creating beautiful, responsive, 
                and user-friendly web applications.
              </p>
              <p>
                Currently working at <strong>Hubble42 Inc.</strong> as a Frontend Developer and LLM Engineer, 
                I specialize in modern web technologies and model training. My journey spans from 
                <strong>Avicenna Enterprise Solutions</strong> to my current role, driven by 
                curiosity and a passion for cutting-edge technology.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>What I Do</h3>
              <p>
                I create modern web applications using <strong>React</strong>, <strong>JavaScript</strong>, 
                and <strong>Firebase</strong>, while also working with <strong>Large Language Models</strong> 
                and model training. My focus is on writing clean, maintainable code and 
                delivering exceptional user experiences with custom model integration.
              </p>
              <div className="specialties">
                <span className="specialty">Frontend Development</span>
                <span className="specialty">LLM Engineering</span>
                <span className="specialty">React Development</span>
                <span className="specialty">Model Training</span>
                <span className="specialty">Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{'--delay': `${index * 0.1}s`}}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-bar" 
                      style={{
                        '--width': `${skill.level}%`,
                        '--color': skill.color
                      }}
                    >
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="experience-section">
            <h3 className="experience-title">Experience Journey</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item" style={{'--delay': `${index * 0.2}s`}}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                    <div className="timeline-technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;