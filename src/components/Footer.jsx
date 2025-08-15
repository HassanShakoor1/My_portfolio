import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: '#', color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: '#0077b5' },
    { name: 'Email', icon: '✉️', url: 'mailto:hassan.shakoor@icloud.com', color: '#ea4335' }
  ];

  const quickLinks = [
    { name: 'Home', icon: '🏠', href: '#home' },
    { name: 'About', icon: '👨‍💻', href: '#about' },
    { name: 'Projects', icon: '🚀', href: '#projects' },
    { name: 'Contact', icon: '📧', href: '#contact' }
  ];

  const technologies = [
    'React', 'JavaScript', 'Node.js', 'CSS3', 'Firebase', 'AI/LLM'
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
        <div className="footer-glow"></div>
      </div>
      
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <h2>UBAID UL HASSAN<span className="brand-dot">.</span></h2>
              <div className="brand-subtitle">Frontend Developer & AI Engineer</div>
            </div>
            <p className="brand-description">
              Passionate about creating innovative digital solutions with modern web technologies and AI.
            </p>
            <div className="brand-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-text">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-text">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-text">Companies</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="nav-link">
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-text">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="footer-skills">
            <h4>Tech Stack</h4>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="footer-contact">
            <h4>Let's Connect</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                          <a href="mailto:hassan.shakoor@icloud.com" className="contact-link">
            hassan.shakoor@icloud.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom - Full Width */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {currentYear} Ubaid ul Hassan. All rights reserved.</p>
          </div>
          <div className="footer-heart">
            <span>Made with</span>
            <span className="heart">❤️</span>
            <span>by Ubaid ul Hassan</span>
          </div>
          <div className="availability">
            <span className="status-indicator"></span>
            <span>Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;