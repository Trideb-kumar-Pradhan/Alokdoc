
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
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        // color: 'white',
        textAlign: 'center',
        overflow: 'hidden', 
        position: 'relative', 
      }}
    >
      <Typography variant="h5" className="carousel-heading">
      <span style={{ fontSize: '25px', fontFamily: 'Times New Roman, Times, serif', textShadow: '0px 2px 4px rgba(0, 0, 0, 3.3)' }}>
      Welcome to Alok DOCS
            </span>
        
      </Typography>
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          stopOnHover={false}
          className="carousel"
          transitionTime={150}
          direction="forward"
         
        >
        
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/j.jpg`}
              alt="Slide 1" 
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/b.jpg`}
              alt="Slide 2"
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/i.jpg`}
              alt="Slide 2"
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/l.jpg`}
              alt="Slide 3"
            />            
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/g.jpg`}
              alt="Slide 3"
            />            
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/h.jpg`}
              alt="Slide 3"
            />            
          </div>
        </Carousel>
      </div>
    </Box>
  );
};


export default Section;
