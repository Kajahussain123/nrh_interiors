import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/living-room.png'
import image2 from '../../assets/FF BEDROOM 02.png'

function WhyNRHInteriors() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f6f0e6', // Light beige background
        padding: '60px 20px',
      }}
    >
      <Grid container spacing={2}>
        {/* Left Image Section */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Box
            component="img"
            src={image1}
            alt="Interior Design"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Right Content Section */}
        <Grid item xs={12} md={6} data-aos="fade-down">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#8E7C57', // Golden tan color
            }}
          >
            Why NRH Interiors
          </Typography>

          <Typography
            variant="body1"
            sx={{
              margin: '20px 0',
              textAlign: 'center',
              color: '#6D5D4B', // Subtle dark brown for text
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Our team works passionately with clients to achieve magnificent results that are cherished for a lifetime.
            We create designs that are visually stunning, intellectually engaging, and enduring. As a top company in the industry,
            we believe that design must blend aesthetic ingenuity with practicality. After developing conceptual briefs through discussions,
            we implement the best solutions with intelligence.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              margin: '20px 0',
              textAlign: 'center',
              color: '#6D5D4B', // Subtle dark brown for text
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            From initial ideas on paper to meticulous planning and final execution, our comprehensive interior design services ensure
            clarity and precision, leading to complete client satisfaction.
          </Typography>
        </Grid>
      </Grid>

      {/* Why Choose Us Section */}
      <Grid container spacing={2} sx={{ marginTop: '60px' }}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Box sx={{ textAlign: 'left', padding: '0 20px' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#8E7C57',
              }}
            >
              Why Choose Us
            </Typography>

            {/* Reasons Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
              {[
                'Over 50+ home interior design projects completed across South India.',
                'Highly customized furniture design solutions tailored to your space.',
                'High-quality home interior design projects that enhance living spaces.',
                'Affordable solutions for every kind of budget, ensuring everyone can enjoy beautiful interiors.',
                'Use of modern European technology and machinery for furniture manufacturing.',
                'Stringent quality control employed in every aspect of our projects.',
                'On-time project delivery to meet your renovation timelines.',
                'Over two decades of experience in home interior design and furniture solutions.',
                'Innovative and modern interior design solutions focused on functionality and aesthetics.',
                'High-quality materials used, including marine plywood, WPC, etc... for durable furniture.'
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                  <ArrowForwardIcon sx={{ color: '#8E7C57', marginRight: '10px' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#6D5D4B',
                      fontFamily: '"Space Grotesk", sans-serif',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right Image Section for Why Choose Us */}
        <Grid item xs={12} md={6} data-aos="fade-down">
          <Box
            component="img"
            src={image2}
            alt="Interior Design"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhyNRHInteriors
