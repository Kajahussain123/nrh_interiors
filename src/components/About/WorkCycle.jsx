import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';

// Keyframe animation for the floating effect
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

function WorkCycle() {
  const steps = [
    {
      number: 1,
      title: 'Client Consulting',
      description: 'Clients contact us with floor plans for interior works and tell us about their desired interior homes.',
    },
    {
      number: 2,
      title: 'Cost Estimation',
      description: 'Our executives visit the space and take necessary measurements. Then it\'s handed over to the estimation team.',
    },
    {
      number: 3,
      title: 'Developing Interior Design',
      description: 'Based on measurements and clients’ desires, we customize designs and develop interior designs.',
    },
    {
      number: 4,
      title: 'Site Work Starts',
      description: 'Based on the proposed plan by the client, our team starts working on interiors.',
    },
    {
      number: 5,
      title: 'Handing Over the Project',
      description: 'After sixty to ninety days, our site work will be finished, and our client can move into their beautiful house.',
    },
    {
      number: 6,
      title: 'Post-Completion Support',
      description: 'We provide ongoing support after project completion, ensuring that clients are satisfied with their new interiors and addressing any concerns.',
    },
  ];
  

  return (
    <Box
      sx={{
        backgroundColor: '#e6d0a6', // Beige background
        padding: '40px 20px',
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h3"
        sx={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#9e8856', // Brownish color for the heading
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Our Work Cycle
      </Typography>

      {/* Work Cycle Grid */}
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              // Stagger effect only on medium screens and larger
              marginTop: { xs: '0px', sm: index === 1 || index === 4 ? '70px' : '0px' }, 
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Step Circle with Animation and Hover Effects */}
              <Box
                sx={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '2px dashed #9e8856', // Dotted border
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px',
                  animation: `${floatAnimation} 2s ease-in-out infinite`, // Apply animation
                  transition: 'transform 0.3s, border-color 0.3s', // Smooth transition for hover effects
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale on hover
                    borderColor: '#b89a62', // Change border color on hover
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9e8856' }}>
                  {step.number}
                </Typography>
              </Box>

              {/* Card with Step Description and Hover Effects */}
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: '#fff',
                  transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
                  '&:hover': {
                    transform: 'scale(1.05)', // Scale up on hover
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      color: '#545454'

                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, fontSize: "14px", fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 , color:"#8E7C57"}}>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WorkCycle;
