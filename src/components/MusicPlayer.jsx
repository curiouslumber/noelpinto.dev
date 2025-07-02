import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Slider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import lofiAudio from '../assets/audios/forest-guitar-lofi.mp3';

// Sample lofi forest music URL (replace with your own or use a service)
const LOFI_STREAM_URL = lofiAudio;

const MusicPlayer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(LOFI_STREAM_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue;
    if (newValue === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume || 0.5;
      setVolume(volume || 0.5);
    } else {
      audioRef.current.volume = 0;
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: isMobile ? '20px' : '24px',
        right: '24px',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: isMobile ? 1 : 2,
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? 1 : 2,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        <IconButton 
          onClick={togglePlay}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        
        {!isMobile && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '150px' }}>
              <IconButton onClick={toggleMute} size="small" sx={{ color: 'white' }}>
                {isMuted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
              </IconButton>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                min={0}
                max={1}
                step={0.01}
                aria-labelledby="volume-slider"
                sx={{
                  color: 'white',
                  '& .MuiSlider-track': {
                    border: 'none',
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.3,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                    backgroundColor: '#fff',
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                      boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
                    },
                  },
                }}
              />
            </Box>
            
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap' }}>
              Lofi Forest
            </Typography>
          </>
        )}
      </Box>
    </motion.div>
  );
};

export default MusicPlayer;
