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
        paddingRight: '5rem', 
        alignItems: 'center', // Centers items vertically
        color: 'white',
        textAlign: 'center',
      }}
    >
    <Typography variant="h3" style={{ color: 'grey',  }}>
      Welcome to Alok DOCS
    </Typography>
    </Box>
  );
};

export default Section;




