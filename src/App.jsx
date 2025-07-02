import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import MusicPlayer from "./components/MusicPlayer";
import SocialMediaIcons from "./components/SocialMediaIcons";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Global Components */}
        <SocialMediaIcons />
        <MusicPlayer />
      </Box>
    </Router>
  );
}

export default App;
