import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
