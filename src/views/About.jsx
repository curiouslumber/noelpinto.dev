import React from "react";
import { Box, Typography, keyframes, useTheme, useMediaQuery, Avatar, Container, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";
import bg from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import GlassBox from "../components/GlassBox";

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          zIndex: 2,
        }
      }}
    >
      <Navbar />
      <Container 
        maxWidth="md" 
        sx={{
          position: 'relative',
          zIndex: 3,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 8,
          px: isMobile ? 2 : 4,
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: '100%' }}
        >
          <GlassBox
            sx={{
              p: isMobile ? 3 : 4,
              mt: isMobile ? 4 : 8,
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4"
                sx={{
                  color: 'white',
                  mb: 3,
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
                About Me
              </Typography>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
              <Typography 
                variant="body1" 
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.8,
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  mb: 3,
                }}
              >
                My journey in tech has been driven by a passion for problem-solving and a commitment to clean, maintainable code. I take pride in leading projects from concept to completion, ensuring each solution is tailored to meet specific business requirements while adhering to industry best practices.
              </Typography>

              <Box 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  p: 3,
                  mb: 3,
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.7,
                    mb: 1,
                  }}
                >
                  "Noel is highly experienced in Frontend and UI development. He's well-versed in frontend concepts and state management, able to debug code effortlessly. His ability to quickly learn and adapt to new challenges is remarkable. He communicates complex ideas clearly and is a pleasure to work with."
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'right',
                  }}
                >
                  — Hansel Presley Saldanha, Software Developer at GMU CPH
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h6"
                sx={{
                  color: 'white',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(120deg, rgba(132, 250, 176, 0.9) 0%, rgba(143, 211, 244, 0.9) 100%)',
                  }} 
                />
                What I Do
              </Typography>
              
              <Box 
                sx={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                  gap: 2,
                  mt: 2,
                }}
              >
                {[
                  { 
                    title: 'Mobile App Development', 
                    desc: 'Building Mobile Applications for Android and iOS and publishing them to Play Store and App Store' 
                  },
                  { 
                    title: 'Web Development', 
                    desc: 'Building websites for clients as per requirements and publishing them on domain' 
                  },
                  { 
                    title: 'Content Management', 
                    desc: 'Updating content on website based on the requirements' 
                  },
                  { 
                    title: 'Software Consulting', 
                    desc: 'Meeting with clients to understand their requirements and assisting them in software development' 
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 500,
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </GlassBox>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;