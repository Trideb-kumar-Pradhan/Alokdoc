
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './section.css';

const Section = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh', 
        // backgroundColor: 'grey',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden', 
        position: 'relative', /* Ensure relative positioning for absolute children */
      }}
    >
      <Typography variant="h5" className="carousel-heading">
        Welcome to Alok DOCS
      </Typography>
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          stopOnHover={false}
          className="carousel"
        >
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/a.jpg`}
              alt="Slide 1" 
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/k.webp`}
              alt="Slide 2"
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/sm.jpg`}
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
    </Box>
  );
};

export default Section;
