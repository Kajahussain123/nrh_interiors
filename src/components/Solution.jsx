import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../src/assets/bedroom.png'

const DesignCard = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleGalleryRedirect = () => {
    setLoading(true);
    navigate('/gallery'); // Redirect to the gallery page
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5e2c7',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '10px', md: '0' }
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: '1200px',
          height: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center'
        }}
      >
        {/* Left Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: { xs: '20px', md: '0' }
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="Design Image"
            sx={{
              width: '100%',
              height: { xs: '50vh', md: '100vh' },
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Right Content Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { xs: '20px', md: '40px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div data-aos="fade-up">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Home Interior & Furniture Design
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: "#8E7C57"
              }}
            >
              <b>Crafting stylish and functional homes with tailored furniture.</b>
            </Typography>

            {/* Star Ratings */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: '#FFD700',
                    marginRight: '5px',
                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: "#8E7C57"
              }}
            >
              <b>
                NRH Interiors specializes in creating beautiful home interiors that reflect your personal style and comfort.
                From modern living rooms to elegant bedrooms, we focus on bespoke furniture and tailored designs to elevate your home.
              </b>
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '20px', md: '0' }
              }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Styles
                </Typography>
                <Typography variant="body1" sx={{ color: "#8E7C57" }}>
                  <b>Modern, Minimalist, Classic</b>
                </Typography>
              </Box>
            </Box>

            <Button
              onClick={handleGalleryRedirect}
              variant="outlined"
              endIcon={<span>&rarr;</span>}
              sx={{
                borderColor: '#8E7C57',
                color: '#8E7C57',
                textTransform: 'none',
                fontWeight: 'bold',
                alignSelf: { xs: 'center', md: 'flex-start' },
                '&:hover': {
                  backgroundColor: '#8E7C57',
                  color: '#fff',
                },
              }}
            >
              View Gallery
            </Button>

          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DesignCard;
