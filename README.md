# Noel Pinto - Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/aaebf8dd-9a74-4246-8dd9-175256455169/deploy-status)](https://app.netlify.com/projects/noelpintodev/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![MUI](https://img.shields.io/badge/Material--UI-5.14.20-0081CB?logo=mui)](https://mui.com/)

Welcome to my personal portfolio website, a modern and interactive showcase of my work as a Mobile Application Developer specializing in Flutter. The site features a clean, responsive design with a lofi aesthetic and subtle animations.

## ✨ Features

- **Modern UI/UX** with glassmorphism design
- **Responsive Layout** that works on all devices
- **Interactive Elements** with smooth animations
- **Lofi Music Player** with ambient background music
- **Performance Optimized** for fast loading

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router
- **Styling**: Material-UI (MUI) with custom theme
- **Animations**: Framer Motion
- **Audio**: Web Audio API
- **Form Handling**: Custom form validation and submission
- **Backend Integration**: Webhook integration with Make.com (formerly Integromat)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages / Vercel

## 📝 Contact Form Setup

The contact form is integrated with a webhook service (Make.com/Integromat) to handle form submissions. Here's how to set it up:

1. **Environment Variables**:
   - Copy `.env.example` to `.env` in the project root
   - Add your webhook URL from Make.com as `REACT_APP_CONTACT_FORM_WEBHOOK_URL`

2. **Webhook Configuration**:
   - The form sends a POST request to the configured webhook with the following JSON payload:
     ```json
     {
       "name": "User's name",
       "email": "user@example.com",
       "message": "User's message"
     }
     ```
   - The webhook should be configured to process this data and send it to your email or other destination

3. **Form Validation**:
   - Client-side validation for required fields and email format
   - Error messages are displayed below the relevant fields
   - Success/error notifications appear at the top of the form
