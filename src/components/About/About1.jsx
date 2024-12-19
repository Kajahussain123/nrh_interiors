import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });

  return (
    <Box
      sx={{
        backgroundColor: '#f6f0e6', 
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage: `url('https://i.postimg.cc/PqCqWFJv/modern-minimalist-office.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '185px', // Fixed height for the image
        }}
      >
        {/* Heading over the image */}
        <Typography
          variant="h3"
          sx={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centering the heading
            color: '#fff', // White text color
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: '"Roboto", sans-serif',
            textShadow: `
              1px 1px 0 #000,
              -1px -1px 0 #000,
              1px -1px 0 #000,
              -1px 1px 0 #000,
              0 1px 0 #000,
              0 -1px 0 #000`,
          }}
        >
          About NRH Interiors
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          padding: '80px 60px',
          maxWidth: 'auto',
          margin: '0 auto',
          backgroundColor: "#e6d0a6"
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate into view
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700 // Adjust font weight as needed
            }}
          >
            Welcome to NRH Interiors
          </Typography>
          <Typography variant="body1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: "17px",
              color: "#8E7C57",
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700
            }}>
            NRH Interiors is a home and furniture-based interiors company, passionate about designing spaces that truly reflect your style and enhance the comfort of your home.
          </Typography>

          <Typography variant="body1" sx={{
            mt: 2,
            fontWeight: 'bold',
            mb: 2,
            fontSize: "17px",
            fontFamily: '"Space Grotesk", sans-serif',
            color: "#8E7C57",
            fontWeight: 700
          }}>
            With a deep understanding of interior design and furniture solutions, our experienced team ensures that each project meets your unique needs, combining aesthetics with functionality.
          </Typography>

          <Typography variant="body1" sx={{
            mt: 2,
            fontWeight: 'bold',
            mb: 2,
            fontSize: "17px",
            fontFamily: '"Space Grotesk", sans-serif',
            color: "#8E7C57",
            fontWeight: 700
          }}>
            Whether you’re updating a single room or your entire home, we are committed to delivering exceptional results that inspire and elevate your living experience.
          </Typography>

        </motion.div>
      </Box>
    </Box>
  );
}

export default AboutSection;
