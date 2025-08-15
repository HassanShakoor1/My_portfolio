import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
        <div className="footer-glow"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <h2>UBAID-UL-HASSAN<span className="brand-dot">.</span></h2>
              <div className="brand-subtitle">Frontend Developer & LLM Engineer</div>
            </div>
            <p className="brand-description">
              Crafting exceptional digital experiences with modern web technologies 
              and AI integration. Based in Lahore, Pakistan.
            </p>
            <div className="brand-stats">
              <div className="stat-item">
                <span className="stat-number">1.5+</span>
                <span className="stat-text">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-text">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-text">Companies</span>
              </div>
            </div>
          </div>
          
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">🏠 Home</a></li>
              <li><a href="#about">👨‍💻 About</a></li>
              <li><a href="#projects">🚀 Projects</a></li>
              <li><a href="#contact">📧 Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-skills">
            <h4>Technologies</h4>
            <div className="tech-grid">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">LLM</span>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hassan.shakoor@icloud.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            <div className="availability">
              <span className="status-indicator"></span>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} UBAID-UL-HASSAN. All rights reserved.</p>
            <div className="footer-heart">
              Made with <span className="heart">❤️</span> in Lahore
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;