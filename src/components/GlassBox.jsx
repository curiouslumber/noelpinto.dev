import React from 'react';
import { Box } from '@mui/material';

const GlassBox = ({ children, sx = {}, ...props }) => {
  return (
    <Box
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          zIndex: -1,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GlassBox;
