import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const data = [
  { number: 50, suffix: '+', text: 'Successfully completed projects' },
  { number: 30, suffix: '+', text: 'Highly specialized employees' },
  { number: 10, suffix: ' Years', text: 'Warranty' },
  { prefix: 'Premium', text: 'Materials' }, // Removed the number, only prefix remains
  { prefix: 'Life Long', text: 'Service Support' }, // Removed the number, only prefix remains
];

const InfoSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true); // Start animation when in view
          observer.disconnect(); // Disconnect observer after triggering
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, []);

  return (
    <Box 
      ref={sectionRef} // Attach ref to observe
      sx={{ 
        backgroundColor: '#f6f0e6', 
        padding: '50px 0', 
        fontFamily: '"Space Grotesk", sans-serif',
        overflow: 'hidden' // To hide the circle until it animates in
      }}
    >
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: 'bold' }}
      >
        Professional Home Construction Company
      </Typography>
      <Grid 
        container 
        spacing={2} 
        justifyContent="center" 
        alignItems="center"
        sx={{ padding: '30px 0' }}
      >
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                '&:hover .circle': {
                  backgroundColor: '#a89160',
                  color: '#fff',
                  transform: 'translateY(-10px)', // Moves the circle up on hover
                },
                '&:hover .circleText': {
                  color: '#fff',
                },
                transition: 'transform 0.3s ease',
              }}
            >
              <Box
                className="circle"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: '2px solid #a89160',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '10px',
                  transform: 'translateX(100%)', // Start off-screen on the right
                  animation: 'slideIn 1s ease forwards', // Animate from right to left
                  transition: 'all 0.3s ease',
                  '@keyframes slideIn': {
                    '0%': { transform: 'translateX(100%)' }, // Start from the right
                    '100%': { transform: 'translateX(0)' }, // End at original position
                  }
                }}
              >
                <Typography
                  className="circleText"
                  variant="h5"
                  sx={{
                    color: '#a89160',
                    fontWeight: 'bold',
                    transition: 'color 0.3s',
                  }}
                >
                  {/* Add countdown with conditional prefix or suffix */}
                  {startAnimation ? (
                    item.prefix ? (
                      item.prefix // Directly show prefix for non-number items
                    ) : (
                      <CountUp end={item.number} suffix={item.suffix} duration={2} />
                    )
                  ) : (
                    // Show the initial static number until the countdown starts
                    `${item.number || ''}${item.suffix || item.prefix || ''}`
                  )}
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ fontWeight: '500', color: '#333' }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Link to={'/about'}>
        <Typography
          variant="body2"
          align="right"
          sx={{ paddingRight: '50px', color: '#333', cursor: 'pointer' }}
        >
          More About Us &gt;
        </Typography>
      </Link>
    </Box>
  );
};

export default InfoSection;
