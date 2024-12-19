import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react'; // Import keyframes for animations
import Loader from './Loader';
import image1 from '../../src/assets/living-room.png'

// Keyframes for the fade-in and slide-up animation
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function VendorSection() {

  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isVisible, setIsVisible] = useState(false); // Visibility state
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when the section is in view
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up the observer
      }
    };
  }, []);

  const handleContactRedirect = () => {
    setLoading(true); // Set loading to true when button is clicked
    
    setTimeout(() => {
      navigate('/contactus'); // Redirect to the /contactus path
      window.scrollTo(0, 0);
      setLoading(false); // Reset loading state after redirect
    }, 1000); // Simulate loading time (adjust as necessary)
  };

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: '#FAF7F0', minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Section with text and image */}
      <Grid container>
  {/* Left Text Section */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        padding: { xs: '1rem', md: '3rem' }, // Padding for different screen sizes
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        gap: '1.5rem', // Space between the text and button elements
      }}
    >
      {/* Updated Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          opacity: isVisible ? 1 : 0, // Animate when visible
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
          transition: 'all 1s ease-in-out', // Smooth transition for animation
        }}
      >
        We partner with top furniture makers and interior specialists.
      </Typography>

      {/* Updated Description */}
      <Typography
        variant="body1"
        sx={{
          color: 'gray',
          opacity: isVisible ? 1 : 0, // Animate when visible
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
          transition: 'all 1s ease-in-out 0.3s', // Add a delay to the text animation
        }}
      >
        Our team collaborates with over 70 vendors, from artisanal furniture makers to expert home interior designers, 
        to deliver personalized and unique design solutions for every home.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#B59F6A',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '20px',
          textTransform: 'none',
          opacity: isVisible ? 1 : 0, // Animate when visible
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
          transition: 'all 1s ease-in-out 0.6s', // Delay the button animation
        }}
        onClick={handleContactRedirect}
      >
        Let’s Discuss Your Dream Space
      </Button>
    </Box>
  </Grid>

  {/* Right Image Section */}
  <Grid item xs={12} md={6}>
    <Box
      component="img"
      alt="Home Interior Design"
      src={image1}
      sx={{
        width: '100%',
        height: { xs: '100%', md: '109.5%' }, // Adjust height for responsiveness
        objectFit: 'cover',
        marginTop: { xs: '2rem', md: '0' }, // Adds margin on top for mobile screens
      }}
    />
  </Grid>
</Grid>


      {/* Help section */}
      <Box
        sx={{
          backgroundColor: '#A58E6F',
          padding: { xs: '2rem', md: '4rem' }, // Adjusted padding for different screens
          marginTop: '3.1rem', // Space between sections
        }}
      >
        {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                opacity: isVisible ? 1 : 0, // Animate when visible
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
                transition: 'all 1s ease-in-out 0.9s', // Add delay for the help section
              }}
            >
              Need Assistance?
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'white',
                marginTop: '1rem',
                opacity: isVisible ? 1 : 0, // Animate when visible
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
                transition: 'all 1s ease-in-out 1.2s', // Delay for text in the help section
              }}
            >
              Our team is here to help you with any inquiries or support you may need. Whether it's about our services or your projects, don't hesitate to reach out!
            </Typography>
          </Grid>

          <Grid item>
            <Button
              onClick={handleContactRedirect}
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                textTransform: 'none',
                padding: '0.5rem 1.5rem',
                opacity: isVisible ? 1 : 0, // Animate when visible
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Animate translation
                transition: 'all 1s ease-in-out 1.5s', // Delay the button in the help section
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      )}
      </Box>
    </Box>
  );
}
