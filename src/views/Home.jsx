import React from "react";
import { Box, Typography, Button, keyframes, Container } from "@mui/material";
import { motion } from "framer-motion";
import bg from "../assets/images/background_1.webp";
import Navbar from "../components/Navbar";
import GlassBox from "../components/GlassBox";
import { Code, PhoneAndroid, Brush } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.5) saturate(1.2)',
                    zIndex: -1,
                },
            }}
        >
            <Navbar />

            <Container maxWidth="lg" sx={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                color: 'white',
                                mb: 2,
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                lineHeight: 1.1,
                                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            }}
                        >
                            Hi, I'm{' '}
                            <Box
                                component={motion.span}
                                onClick={() => navigate('/about')}
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    display: 'inline-block',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '2px',
                                        bottom: '0',
                                        left: 0,
                                        background: 'linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)',
                                        transform: 'scaleX(0)',
                                        transformOrigin: 'right',
                                        transition: 'transform 0.3s ease-in-out',
                                    },
                                    '&:hover::after': {
                                        transform: 'scaleX(1)',
                                        transformOrigin: 'left',
                                    },
                                    '&:active': {
                                        transform: 'translateY(1px)',
                                    },
                                    background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    paddingBottom: '2px',
                                }}
                            >
                                Noel Pinto
                            </Box>
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 400,
                                color: 'rgba(255,255,255,0.9)',
                                mb: 4,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                textShadow: '0 1px 5px rgba(0,0,0,0.2)',
                            }}
                        >
                            Software Engineer (Mobile Apps)
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.85)',
                                maxWidth: '600px',
                                mb: 4,
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                            }}
                        >
                            Crafting beautiful, performant mobile apps and web applications.
                            I transform ideas into elegant, user-friendly applications that people love to use.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
                            <Button
                                variant="contained"
                                size="large"
                                component="a"
                                onClick={() => navigate('/portfolio')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '12px',
                                    px: 4,
                                    py: 1.5,
                                    color: 'white',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        background: 'rgba(255, 255, 255, 0.15)',
                                    },
                                }}
                            >
                                View My Work
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                sx={{
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '12px',
                                    px: 4,
                                    py: 1.5,
                                    color: 'white',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                    },
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>
                    </motion.div>

                    {/* Floating Tech Icons */}
                    <Box sx={{
                        position: 'absolute',
                        right: { xs: '5%', md: '10%' },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: { xs: 'none', lg: 'block' },
                        zIndex: -1,
                    }}>
                        <GlassBox
                            sx={{
                                p: 3,
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                                animation: `${float} 6s ease-in-out infinite`,
                            }}
                        >
                            <PhoneAndroid sx={{ fontSize: 60, color: 'white' }} />
                        </GlassBox>

                        <GlassBox
                            sx={{
                                p: 3,
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                                animation: `${float} 6s ease-in-out infinite 2s`,
                                mt: 3,
                            }}
                        >
                            <Code sx={{ fontSize: 60, color: 'white' }} />
                        </GlassBox>

                        <GlassBox
                            sx={{
                                p: 3,
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                                animation: `${float} 6s ease-in-out infinite 1s`,
                                mt: 3,
                            }}
                        >
                            <Brush sx={{ fontSize: 60, color: 'white' }} />
                        </GlassBox>
                    </Box>
                </Box>
            </Container>

            {/* Decorative elements */}
            <Box sx={{
                position: 'absolute',
                bottom: '-50px',
                left: '10%',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(5px)',
                zIndex: -1,
            }} />

            <Box sx={{
                position: 'absolute',
                top: '20%',
                right: '15%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(100,200,255,0.1) 0%, rgba(100,200,255,0) 70%)',
                filter: 'blur(10px)',
                zIndex: -1,
            }} />
        </Box>
    );
};

export default Home;