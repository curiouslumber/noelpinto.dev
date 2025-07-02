import React, { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import { motion } from "framer-motion";
import bg from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";
import GlassBox from "../components/GlassBox";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate form submission
        try {
            // Replace with actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus({
                success: true,
                message: 'Your message has been sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

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
                    p: 3,
                    boxSizing: 'border-box',
                    pt: '100px',
                }}
            >
                <GlassBox
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                        maxWidth: '600px',
                        width: '100%',
                        p: 4,
                        borderRadius: '16px',
                        backdropFilter: 'blur(12px)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
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
                            textAlign: 'center',
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        Get In Touch
                    </Typography>

                    {submitStatus.message && (
                        <Alert 
                            severity={submitStatus.success ? 'success' : 'error'}
                            sx={{ 
                                mb: 3,
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                '& .MuiAlert-icon': { color: 'white' }
                            }}
                        >
                            {submitStatus.message}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="name"
                            name="name"
                            label="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            id="message"
                            name="message"
                            label="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            component={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            sx={{
                                mt: 3,
                                mb: 2,
                                py: 1.5,
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: 'white',
                                fontWeight: 500,
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    borderColor: 'rgba(255, 255, 255, 0.25)',
                                },
                                '&.Mui-disabled': {
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'rgba(255, 255, 255, 0.4)',
                                },
                            }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                        </Button>
                    </Box>
                </GlassBox>
            </Box>
        </Box>
    );
};

export default Contact;