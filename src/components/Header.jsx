import { useState, useEffect } from 'react';
import { 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { text: 'Home', href: '#home', icon: '🏠' },
    { text: 'About', href: '#about', icon: '👨‍💻' },
    { text: 'Projects', href: '#projects', icon: '🚀' },
    { text: 'Contact', href: '#contact', icon: '📧' }
  ];

  const drawer = (
    <Box className="drawer-content">
      <div className="drawer-header">
        <div className="drawer-logo-container">
          <div className="drawer-logo-icon">
            <span>&lt;/&gt;</span>
          </div>
          <div>
            <h3 className="drawer-logo">UBAID-UL-HASSAN</h3>
            <span className="drawer-logo-subtitle"> Frontend Developer</span>
          </div>
        </div>
        <IconButton 
          onClick={handleDrawerToggle}
          className="drawer-close-btn"
          sx={{ color: '#2563eb' }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="drawer-nav-list">
        {navItems.map((item, index) => (
          <div 
            key={item.text} 
            className="drawer-nav-item"
            onClick={() => handleNavClick(item.href)}
          >
            <span className="drawer-nav-icon">{item.icon}</span>
            <span className="drawer-nav-text">{item.text}</span>
            <span className="drawer-nav-arrow">→</span>
          </div>
        ))}
      </div>
      <div className="drawer-footer">
        <div className="drawer-contact">
                      <p>📧 hassan.shakoor@icloud.com</p>
          <p>📍 Lahore, Pakistan</p>
        </div>
        <div className="drawer-social">
          <span className="availability-badge">
            <span className="status-dot"></span>
            Available for projects
          </span>
        </div>
      </div>
    </Box>
  );

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-container">
            <div className="logo-icon">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket">&gt;</span>
            </div>
            <div className="logo-text-container">
              <h2 className="logo-text">UBAID-UL-HASSAN</h2>
              <span className="logo-subtitle">Frontend Developer</span>
            </div>
          </div>
        </div>
        
        {!isMobile && (
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={item.text}>
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            className="mobile-menu-btn"
            sx={{ 
              color: '#2563eb',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 280,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              borderRight: 'none',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;