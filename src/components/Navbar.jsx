import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
        backdropFilter: 'blur(10px)', // This creates the glass effect
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.2)'
          }}
        >
          Noel Pinto
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              sx={{
                color: 'white',
                mx: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
