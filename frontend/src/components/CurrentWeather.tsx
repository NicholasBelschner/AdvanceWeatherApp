import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const WeatherIcon = styled(motion.div)(({ theme }) => ({
  width: 120,
  height: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(45deg, #00f5ff 30%, #ff00ff 90%)',
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 60,
    color: theme.palette.common.white,
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: 15,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& svg': {
    color: '#00f5ff',
  },
}));

const CurrentWeather: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <WeatherIcon
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <WbSunnyIcon />
          </WeatherIcon>
          <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            72°F
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Sunny
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InfoBox>
                <AirIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Wind Speed
                  </Typography>
                  <Typography variant="h6">
                    8 mph
                  </Typography>
                </Box>
              </InfoBox>
            </Grid>
            <Grid item xs={12}>
              <InfoBox>
                <OpacityIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Humidity
                  </Typography>
                  <Typography variant="h6">
                    65%
                  </Typography>
                </Box>
              </InfoBox>
            </Grid>
            <Grid item xs={12}>
              <InfoBox>
                <CompareArrowsIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Pressure
                  </Typography>
                  <Typography variant="h6">
                    1015 hPa
                  </Typography>
                </Box>
              </InfoBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentWeather; 