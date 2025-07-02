import React from "react";
import { Box } from "@mui/material";
import bg from "../assets/images/background.jpg";

const Home = () => {
    return (
        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${bg})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <h1>Home</h1>
        </Box>
    );
};

export default Home;