import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselImages = [
  'https://i.postimg.cc/yNdj3sZf/Screenshot-2024-08-28-113317-1.png',
  'https://i.postimg.cc/sxPGN1Gy/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter.jpg',
  'https://i.postimg.cc/2ykK1LDX/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg' // Additional images as required
];

function AchievementsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f6f0e6',
        padding: theme.spacing(5),
        position: 'relative',
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#9e8856',
          marginBottom: theme.spacing(3),
          textAlign: 'center',
          fontFamily:'"Space Grotesk", sans-serif',
        }}
      >
        Our Achievements
      </Typography>

      <Box
        sx={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                height: isMobile ? 300 : 400,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // Container for the hover effect
                '&:hover div': { // This targets the overlay to appear on hover
                  opacity: 1,
                  transition: 'opacity 0.5s ease-in-out',
                },
              }}
            >
              {/* Overlay on hover */}
              <Box
                sx={{
                  width: isMobile ? '90%' : '40%',
                  position: 'absolute',
                  top: '50%',
                  left: isMobile ? '50%' : 'auto',
                  right: isMobile ? 'auto' : theme.spacing(10),
                  transform: isMobile ? 'translate(-50%, -50%)' : 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: theme.spacing(2),
                  textAlign: 'left',
                  color: '#fff',
                  zIndex: 2,
                  opacity: 0, // Initially invisible
                  borderRadius: isMobile ? '8px' : 'none',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, fontSize: isMobile ? '1.5rem' : '2rem' }}>
                  Celebrating Our Success
                </Typography>
                <Typography variant="body1" sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                  At NRH Interiors, we take pride in our numerous awards and recognitions in the interior design industry. Our commitment to excellence and innovation has been recognized by leading design publications and industry experts.
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                  From creating stunning residential spaces to successful commercial projects, our portfolio showcases our passion and dedication to transforming environments.
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default AchievementsSection;
