import React from 'react';
import { Typography, Box } from '@mui/material';

const Section = () => {
  return (
    <Box
    sx={{
        height: '100vh',
        backgroundImage: `url('/images/bgpic.jpg')`,
        backgroundSize: 'cover', // Ensures the image covers the entire box without distortion
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-end', // Align content to the flex-end of the container
        paddingRight: '5rem', // Adds padding to the right side of the container
        alignItems: 'center', // Centers items vertically
        color: 'white',
        textAlign: 'center',
      }}
    >
<Typography variant="h3">
  <span style={{ color: 'grey' }}>Welcome to  Alok DOCS</span>
</Typography>
    </Box>
  );
};

export default Section;
