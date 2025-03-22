import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';

const ForecastCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: 15,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 32px 0 rgba(0, 245, 255, 0.2)',
  },
}));

const WeatherIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #00f5ff 30%, #ff00ff 90%)',
  marginBottom: theme.spacing(1),
  '& svg': {
    fontSize: 32,
    color: theme.palette.common.white,
  },
}));

// Sample forecast data - replace with API data
const forecastData = [
  { day: 'Mon', temp: 72, icon: <WbSunnyIcon />, condition: 'Sunny' },
  { day: 'Tue', temp: 68, icon: <CloudIcon />, condition: 'Cloudy' },
  { day: 'Wed', temp: 65, icon: <GrainIcon />, condition: 'Rain' },
  { day: 'Thu', temp: 70, icon: <WbSunnyIcon />, condition: 'Sunny' },
  { day: 'Fri', temp: 73, icon: <CloudIcon />, condition: 'Partly Cloudy' },
];

const WeatherForecast: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" component="h2" gutterBottom>
        5-Day Forecast
      </Typography>
      <Grid container spacing={3}>
        {forecastData.map((forecast, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={forecast.day}>
            <ForecastCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Typography variant="subtitle1" color="text.secondary">
                {forecast.day}
              </Typography>
              <WeatherIcon>
                {forecast.icon}
              </WeatherIcon>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {forecast.temp}°F
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {forecast.condition}
              </Typography>
            </ForecastCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherForecast; 