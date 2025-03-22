import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import * as THREE from 'three';

const MapContainer = styled(Box)(({ theme }) => ({
  height: 400,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
}));

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial
          color="#1a1a35"
          metalness={0.7}
          roughness={0.5}
          emissive="#000000"
          emissiveIntensity={0.2}
        />
      </Sphere>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const WeatherMap: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" component="h2" gutterBottom>
        Global Weather Map
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MapContainer>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            style={{ background: 'radial-gradient(circle at 50% 50%, #1a1a35 0%, #0a0a20 100%)' }}
          >
            <Scene />
          </Canvas>
        </MapContainer>
      </motion.div>
    </Box>
  );
};

export default WeatherMap; 