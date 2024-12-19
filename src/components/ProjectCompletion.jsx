import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const steps = [
  {
    title: 'Talk to our Team & Get an Estimate',
    icon: '👥', // Replace with actual icon or image
  },
  {
    title: 'Detailed Drawing and Approval',
    icon: '📋', // Replace with actual icon or image
  },
  {
    title: 'Production at Factories',
    icon: '🏭', // Replace with actual icon or image
  },
  {
    title: 'Material Delivery & Execution',
    icon: '🚚', // Replace with actual icon or image
  },
  {
    title: 'On time project Hand Over',
    icon: '🛠️', // Replace with actual icon or image
  },
];

const ProjectCompletion = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen width is less than or equal to 600px

  return (
    <Box sx={{ backgroundColor: '#E9D9B8', py: 6 }}>
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}
      >
        PROJECT COMPLETION IN THE <span style={{ color: '#a89160' }}>RIGHT TIME</span>
      </Typography>

      {/* Steps Section */}
      <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ position: 'relative' }}>
        {steps.map((step, index) => (
          <Grid item xs={6} sm={2} key={index} sx={{ position: 'relative', textAlign: 'center' }}>
            {/* Line between steps */}
            {!isMobile && index !== steps.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '38%',
                  left: '80%',
                  width: '120px', // Length of the connecting line
                  height: '2px',
                  backgroundColor: '#a89160',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                }}
              />
            )}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                mb: 4, // Margin at the bottom for spacing
              }}
            >
              {/* Circular Icon */}
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: '#f6f0e6', // Default background color
                  color: '#a89160',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '36px',
                  mb: 2,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                  '&:hover': {
                    backgroundColor: '#a89160', // Color on hover
                    color: '#fff', // Icon color on hover
                  },
                }}
              >
                {step.icon}
              </Box>

              {/* Step Title */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  color: '#333',
                  maxWidth: '120px',
                }}
              >
                {step.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectCompletion;
