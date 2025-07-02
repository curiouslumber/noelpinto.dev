import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: '80%',
        maxWidth: 300,
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        '& .MuiListItemButton-root': {
          borderRadius: '12px',
          mb: 1,
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.5rem',
          }}
        >
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            selected={location.pathname === item.path}
            sx={{
              color: 'white',
              textDecoration: 'none',
              '& .MuiTypography-root': {
                fontWeight: location.pathname === item.path ? 600 : 400,
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>

      <Button
        component={Link}
        to="/contact"
        variant="contained"
        fullWidth
        sx={{
          mt: 'auto',
          py: 1.5,
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontWeight: 500,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.15)',
          }
        }}
      >
        Get in Touch
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.18)' : 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: { xs: 0, md: '16px' },
          width: { xs: '100%', md: 'calc(100% - 48px)' },
          left: { xs: 0, md: '24px' },
          right: { xs: 0, md: '24px' },
          top: { xs: 0, md: '24px' },
          maxWidth: '1400px',
          margin: '0 auto',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: { xs: 'rgba(255, 255, 255, 0.08)', md: 'rgba(255, 255, 255, 0.12)' },
            boxShadow: scrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.18)' : 'none',
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
              whileHover={!isMobile ? { scale: 1.03 } : {}}
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
                  background: !isMobile ? 'linear-gradient(135deg, #ffffff 0%, #bdbdbd 100%)' : '',
                  WebkitBackgroundClip: !isMobile ? 'text' : '',
                }
              }}
            >
              NP
            </Typography>

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Contact Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                component="a"
                href="https://github.com/curiouslumber"
                target="_blank"
                rel="noopener noreferrer"
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
                startIcon={<GitHubIcon />}
              >
                GitHub Repo
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
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
              width: '85%',
              maxWidth: 300,
              height: '100%',
              border: 'none',
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '-5px 0 30px rgba(0, 0, 0, 0.3)',
              ml: 'auto',
              transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
              }
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              p: 3,
              position: 'relative',
              zIndex: 1
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.5rem',
                }}
              >
                Menu
              </Typography>
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

            <List sx={{ flex: 1 }}>
              {navItems.map((item) => (
                <ListItem
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    color: 'white',
                    borderRadius: '12px',
                    mb: 1,
                    textDecoration: 'none',
                    backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

            <Button
              component="a"
              href="https://github.com/curiouslumber"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              startIcon={<GitHubIcon />}
              sx={{
                py: 1.5,
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'white',
                fontWeight: 500,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                }
              }}
            >
              GitHub Repo
            </Button>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;