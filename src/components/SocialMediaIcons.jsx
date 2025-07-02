import React, { useMemo } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialMediaIcons = () => {
  const socialLinks = useMemo(() => [
    {
      icon: <LinkedInIcon fontSize="medium" />,
      url: 'https://www.linkedin.com/in/noelpinto47',
      tooltip: 'Connect on LinkedIn',
      color: '#0A66C2',
      ariaLabel: 'LinkedIn profile',
    },
    {
      icon: <EmailIcon fontSize="medium" />,
      url: 'mailto:noelpinto47@gmail.com',
      tooltip: 'Send me an email',
      color: '#EA4335',
      ariaLabel: 'Send email',
    },
  ], []);

  const containerStyles = {
    position: 'fixed',
    left: '20px',
    bottom: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    alignItems: 'center',
  };

  const buttonStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(5px)',
    color: 'white',
    width: '60px',
    height: '60px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  };

  const motionConfig = {
    hover: { y: -5 },
    tap: { scale: 0.9 },
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  return (
    <Box sx={containerStyles}>
      {socialLinks.map((item) => (
        <motion.div
          key={item.url}
          whileHover={motionConfig.hover}
          whileTap={motionConfig.tap}
          transition={motionConfig.transition}
        >
          <Tooltip title={item.tooltip} arrow>
            <IconButton
              component="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              sx={{
                ...buttonStyles,
                '&:hover': {
                  ...buttonStyles['&:hover'],
                  color: item.color,
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
};

SocialMediaIcons.propTypes = {
  // Add any props here if needed
};

export default React.memo(SocialMediaIcons);