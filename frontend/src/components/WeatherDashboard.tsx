import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import MicIcon from '@mui/icons-material/Mic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import WeatherMap from './WeatherMap';
import WeatherStats from './WeatherStats';

const DashboardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

const GlassPanel = styled(Paper)(({ theme }) => ({
  background: 'rgba(26, 26, 53, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: 20,
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(0, 245, 255, 0.1)',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const VoiceButton = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00f5ff 30%, #ff00ff 90%)',
  color: theme.palette.common.white,
  '&:hover': {
    background: 'linear-gradient(45deg, #00f5ff 10%, #ff00ff 70%)',
  },
}));

const WeatherDashboard: React.FC = () => {
  const [location, setLocation] = useState<string>('Loading...');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // TODO: Implement geolocation and weather data fetching
    setLocation('New York, NY');
  }, []);

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    // TODO: Implement voice recognition
  };

  return (
    <DashboardContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Header>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ color: '#00f5ff', mr: 1 }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              {location}
            </Typography>
          </Box>
          <VoiceButton
            size="large"
            onClick={handleVoiceCommand}
            sx={{
              animation: isListening
                ? 'pulse 1.5s ease-in-out infinite'
                : 'none',
            }}
          >
            <MicIcon />
          </VoiceButton>
        </Header>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GlassPanel>
              <CurrentWeather />
            </GlassPanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <GlassPanel>
              <WeatherStats />
            </GlassPanel>
          </Grid>
          <Grid item xs={12}>
            <GlassPanel>
              <WeatherMap />
            </GlassPanel>
          </Grid>
          <Grid item xs={12}>
            <GlassPanel>
              <WeatherForecast />
            </GlassPanel>
          </Grid>
        </Grid>
      </motion.div>
    </DashboardContainer>
  );
};

export default WeatherDashboard; 