import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled(Box)(({ theme }) => ({
  height: 300,
  marginTop: theme.spacing(2),
  '& .recharts-cartesian-grid-horizontal line, & .recharts-cartesian-grid-vertical line': {
    stroke: 'rgba(255, 255, 255, 0.1)',
  },
  '& .recharts-text': {
    fill: theme.palette.text.secondary,
  },
}));

// Sample data - replace with real data from API
const temperatureData = [
  { time: '00:00', temp: 68 },
  { time: '03:00', temp: 65 },
  { time: '06:00', temp: 62 },
  { time: '09:00', temp: 70 },
  { time: '12:00', temp: 75 },
  { time: '15:00', temp: 77 },
  { time: '18:00', temp: 73 },
  { time: '21:00', temp: 70 },
];

const CustomTooltip = styled(Box)(({ theme }) => ({
  background: 'rgba(26, 26, 53, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 8,
  padding: theme.spacing(1),
  '& p': {
    margin: 0,
    color: theme.palette.text.primary,
  },
}));

const WeatherStats: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" component="h2" gutterBottom>
        Temperature Trend
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={temperatureData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                stroke="#fff"
                tick={{ fill: '#fff' }}
              />
              <YAxis
                stroke="#fff"
                tick={{ fill: '#fff' }}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <CustomTooltip>
                        <Typography variant="body2">
                          Time: {label}
                        </Typography>
                        <Typography variant="body2">
                          Temperature: {payload[0].value}°F
                        </Typography>
                      </CustomTooltip>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#00f5ff"
                strokeWidth={2}
                dot={{
                  fill: '#00f5ff',
                  stroke: '#00f5ff',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 8,
                  fill: '#ff00ff',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </motion.div>
    </Box>
  );
};

export default WeatherStats; 