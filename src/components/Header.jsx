import { useState } from 'react';
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
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 1024px)');

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
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ];

  const drawer = (
    <Box className="drawer-content">
      <div className="drawer-header">
        <h3 className="drawer-logo">UBAID-UL-HASSAN</h3>
        <IconButton 
          onClick={handleDrawerToggle}
          className="drawer-close-btn"
          sx={{ color: '#2563eb' }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List className="drawer-nav-list">
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            className="drawer-nav-item"
            onClick={() => handleNavClick(item.href)}
          >
            <ListItemText 
              primary={item.text} 
              className="drawer-nav-text"
            />
          </ListItem>
        ))}
      </List>
      <div className="drawer-footer">
        <p>Frontend Developer</p>
        <div className="drawer-social">
          <span>Let's Connect!</span>
        </div>
      </div>
    </Box>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>
            <span className="logo-text">UBAID-UL-HASSAN</span>
            <span className="logo-dot">.</span>
          </h2>
        </div>
        
        {!isMobile && (
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.text}>
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.text}
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