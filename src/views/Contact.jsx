import React, { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress, Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import bg from "../assets/images/background_1.png";
import Navbar from "../components/Navbar";
import GlassBox from "../components/GlassBox";
import ContactService from "../services/contactService";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ 
        open: false,
        success: false, 
        message: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCloseSnackbar = () => {
        setSubmitStatus(prev => ({ ...prev, open: false }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            await ContactService.submitContactForm(formData);
            
            setSubmitStatus({
                open: true,
                success: true,
                message: 'Your message has been sent successfully!\nI\'ll get back to you soon.'
            });
            
            // Reset form
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                open: true,
                success: false,
                message: error.message || 'Something went wrong. Please try again later.'
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

                    <Snackbar
                        open={submitStatus.open}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert 
                            onClose={handleCloseSnackbar}
                            severity={submitStatus.success ? 'success' : 'error'}
                            sx={{ 
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(8px)',
                                color: 'white',
                                '& .MuiAlert-icon': { color: 'white' },
                                '& .MuiAlert-message': { color: 'white' }
                            }}
                        >
                            {submitStatus.message}
                        </Alert>
                    </Snackbar>

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="name"
                            name="name"
                            label="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            required
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: errors.name ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: errors.name ? 'error.main' : 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: errors.name ? 'error.main' : 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: errors.name ? 'error.light' : 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: errors.name ? 'error.light' : 'rgba(255, 255, 255, 0.9)',
                                },
                                '& .MuiFormHelperText-root': {
                                    color: errors.name ? 'error.light' : 'rgba(255, 255, 255, 0.5)',
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
                            error={!!errors.email}
                            helperText={errors.email}
                            required
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: errors.email ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: errors.email ? 'error.main' : 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: errors.email ? 'error.main' : 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: errors.email ? 'error.light' : 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: errors.email ? 'error.light' : 'rgba(255, 255, 255, 0.9)',
                                },
                                '& .MuiFormHelperText-root': {
                                    color: errors.email ? 'error.light' : 'rgba(255, 255, 255, 0.5)',
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
                            error={!!errors.message}
                            helperText={errors.message}
                            required
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: errors.message ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: errors.message ? 'error.main' : 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: errors.message ? 'error.main' : 'rgba(255, 255, 255, 0.5)',
                                    },
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                },
                                '& .MuiInputLabel-root': {
                                    color: errors.message ? 'error.light' : 'rgba(255, 255, 255, 0.7)',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: errors.message ? 'error.light' : 'rgba(255, 255, 255, 0.9)',
                                },
                                '& .MuiFormHelperText-root': {
                                    color: errors.message ? 'error.light' : 'rgba(255, 255, 255, 0.5)',
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