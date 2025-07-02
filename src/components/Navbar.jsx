import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, useScrollTrigger, Slide } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.18)' : 'none',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        width: 'calc(100% - 48px)',
        left: '24px',
        right: '24px',
        top: '24px',
        maxWidth: '1400px',
        margin: '0 auto',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.25)',
        },
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          <Typography 
            variant="h6" 
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
              letterSpacing: '-0.5px',
              cursor: 'pointer',
              px: 2,
              py: 1,
              borderRadius: '8px',
              '&:hover': {
                background: 'linear-gradient(135deg, #ffffff 0%, #bdbdbd 100%)',
                WebkitBackgroundClip: 'text',
              }
            }}
          >
            Noel Pinto
          </Typography>
          
          <Box 
            component="nav"
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 1,
            }}
          >
            <AnimatePresence mode="wait">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.1 * navItems.indexOf(item)
                  }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      borderRadius: '12px',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '6px',
                        left: '50%',
                        width: location.pathname === item.path ? '20px' : '0',
                        height: '2px',
                        background: 'white',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        '&::after': {
                          width: '20px',
                        }
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>
          
          <Button 
            variant="contained" 
            component={Link}
            to="/contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px -5px rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            sx={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              px: 3,
              py: 1.5,
              fontWeight: 500,
              textTransform: 'none',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
              boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0 6px 25px -2px rgba(0, 0, 0, 0.15)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: 'inherit',
                zIndex: -1,
              },
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Get in Touch
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
