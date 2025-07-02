import React from "react";
import { Box, Typography, keyframes } from "@mui/material";
import bg from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import GlassBox from "../components/GlassBox";

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Portfolio = () => {
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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                    boxSizing: 'border-box',
                    paddingTop: '80px', // Account for navbar height
                }}
            >
                <GlassBox
                    sx={{
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                        animation: `${float} 6s ease-in-out infinite`,
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        sx={{
                            background: 'linear-gradient(45deg, #fff, #e0e0e0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 3,
                            fontWeight: 'bold',
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        Coming Soon
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.6,
                        }}
                    >
                        We're working hard to bring you something amazing!
                    </Typography>
                </GlassBox>
            </Box>
        </Box>
    );
};  

export default Portfolio;