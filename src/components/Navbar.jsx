import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: '80%',
        maxWidth: 300,
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '-5px 0 30px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        ml: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: -1,
        }
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        p: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        pb: 2
      }}>
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: 2 }}>
        {navItems.map((item) => (
          <ListItem 
            button="true"
            key={item.name} 
            component={Link} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              mb: 1,
              borderRadius: '8px',
              backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateX(5px)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                }
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                sx: {
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '1.1rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          zIndex: 1100
        }}
      >
        <Toolbar sx={{ 
          maxWidth: '1400px', 
          width: '100%', 
          mx: 'auto',
          px: { xs: 2, md: 4 },
          justifyContent: 'space-between'
        }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.5px'
            }}
          >
            NP
          </Button>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
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
                      '&::after': {
                        width: '20px',
                      }
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '100%',
              border: 'none',
              background: 'transparent',
              boxShadow: 'none',
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;