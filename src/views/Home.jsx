import React from "react";
import { Box } from "@mui/material";
import bg from "../assets/images/background.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <Box
            sx={{
                padding: "0.5%",
                height: "100vh",
                width: "100%",
                position: "relative",
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
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 2,
                }
            }}
        >
            <Box 
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Navbar />
            </Box>
        </Box>
    );
};

export default Home;