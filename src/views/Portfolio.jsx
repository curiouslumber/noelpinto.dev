import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, useTheme, IconButton, Tooltip } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, GitHub, Download } from '@mui/icons-material';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Navbar from '../components/Navbar';
import GlassBox from '../components/GlassBox';
import bg from '../assets/images/background_1.png';
import { projects } from '../data/projects';

const ANIMATION_DURATION = 0.3;
const STAGGER_DELAY = 0.1;

const ProjectCard = React.memo(({ project, currentImageIndex, onImageChange }) => (
  <>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 600,
            background: 'linear-gradient(120deg, rgba(132, 250, 176, 0.9) 0%, rgba(143, 211, 244, 0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'gradient 8s ease infinite',
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          {project.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {project.code && (
            <Tooltip title="View on GitHub">
              <IconButton 
                href={project.code} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    color: 'rgba(132, 250, 176, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          )}
          {/* {project.demo && (
            <Tooltip title="Download App">
              <IconButton 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    color: 'rgba(143, 211, 244, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Download />
              </IconButton>
            </Tooltip>
          )} */}
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.8)',
          mb: 4,
          lineHeight: 1.7,
        }}
      >
        {project.description}
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DURATION }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            mb: 1,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '0.8rem',
          }}
        >
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {project.tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: ANIMATION_DURATION + (index * STAGGER_DELAY),
                duration: ANIMATION_DURATION
              }}
            >
              <Box
                component="span"
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: '12px',
                  background: 'rgba(132, 250, 176, 0.08)',
                  color: '#e1f7ec',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  border: '1px solid rgba(132, 250, 176, 0.15)',
                  display: 'inline-block',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(132, 250, 176, 0.1)',
                    background: 'rgba(132, 250, 176, 0.12)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {tag}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  </>
));

const ProjectPreview = ({ project, currentImageIndex, onImageChange }) => {
  return (
    <motion.div
      style={{
        perspective: '1000px',
        width: '100%',
        height: '400px',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={(e, { offset, velocity }) => {
          const threshold = 100;
          if (offset.x > threshold) {
            onImageChange(currentImageIndex - 1);
          } else if (offset.x < -threshold) {
            onImageChange(currentImageIndex + 1);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '300px',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            <motion.img
              key={project.images[currentImageIndex]}
              src={project.images[currentImageIndex]}
              alt={`${project.title} preview`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION }}
            />
            
            {/* Navigation Arrows */}
            <Box
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px',
                zIndex: 5,
              }}
            >
              {project.images.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => onImageChange(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: index === currentImageIndex ? 'rgba(132, 250, 176, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ProjectNavigation = ({ currentIndex, total, onNext, onPrev }) => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 4,
        pt: 3,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
        {currentIndex + 1} / {total}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onPrev}
            variant="outlined"
            size="small"
            startIcon={<ArrowBackIos />}
            sx={{
              color: 'white',
              borderColor: 'rgba(184, 225, 255, 0.3)',
              '&:hover': {
                borderColor: '#b8e1ff',
                background: 'rgba(184, 225, 255, 0.1)',
                color: 'white',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Previous
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onNext}
            variant="contained"
            size="small"
            endIcon={<ArrowForwardIos />}
            sx={{
              background: 'linear-gradient(120deg, rgba(132, 250, 176, 0.9) 0%, rgba(143, 211, 244, 0.9) 100%)',
              color: '#0a1929',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 15px rgba(132, 250, 176, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Next
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();
  
  const currentProject = projects[currentProjectIndex];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentProject.images.length]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  const nextProject = useCallback(() => {
    setCurrentProjectIndex(prev => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex(prev => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextProject(),
    onSwipedRight: () => prevProject(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: 2,
        }
      }}
    >
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: '120px', md: '150px' },
          pb: { xs: '80px', md: '100px' },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}
        >
          <GlassBox
            component="article"
            aria-labelledby="project-title"
            sx={{
              p: { xs: 3, md: 4 },
              width: '100%',
              minHeight: isMobile ? 'auto' : '600px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            {...swipeHandlers}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  flex: 1,
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row',
                  flex: 1,
                  minHeight: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Left Side - Project Info */}
                  <Box sx={{ 
                    width: isMobile ? '100%' : '50%',
                    pr: isMobile ? 0 : 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflowY: 'auto',
                  }}>
                    <ProjectCard 
                      project={currentProject} 
                      currentImageIndex={currentImageIndex}
                      onImageChange={setCurrentImageIndex}
                    />
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <ProjectNavigation 
                        currentIndex={currentProjectIndex}
                        total={projects.length}
                        onNext={nextProject}
                        onPrev={prevProject}
                      />
                    </Box>
                  </Box>

                  {/* Right Side - Project Preview */}
                  {/* <Box sx={{ 
                    width: isMobile ? '100%' : '50%',
                    pl: isMobile ? 0 : 2,
                    pt: isMobile ? 4 : 0,
                    height: '100%',
                    minHeight: isMobile ? '400px' : 'auto',
                  }}>
                    <ProjectPreview 
                      project={currentProject} 
                      currentImageIndex={currentImageIndex}
                      onImageChange={setCurrentImageIndex}
                    />
                  </Box> */}
                </Box>
              </motion.div>
            </AnimatePresence>
          </GlassBox>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Portfolio;