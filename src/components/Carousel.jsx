import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousal1 from '../../src/assets/carousal1.png'
import carousal2 from '../../src/assets/carousal2.png'
import carousal3 from '../../src/assets/carousal3.png'



// Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const carouselItems = [
  {
    image: carousal1,
    title: "Creative Spaces, Lasting Impressions",
    subtitle: "Complete Construction solution.",
    linkText: "Check Our Services"
  },
  {
    image: carousal2,
    title: "Crafting Beautiful Homes & Inspiring Spaces",
    subtitle: "Explore More Services.",
    linkText: "Discover Now"
  },
  {
    image: carousal3,
    title: "Elevating Interiors, Enhancing Lives",
    subtitle: "Explore More Services.",
    linkText: "Discover Now"
  }
];

const CustomCarousel = () => {
  const handleTouchStart = (e) => {
    e.stopPropagation(); // Prevent touch events from bubbling up
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: { xs: '60vh', md: '100vh' }, zIndex: 1 }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={4000}
        transitionTime={1000}
        onTouchStart={handleTouchStart} // Handle touch start to allow scrolling
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: '60vh', md: '100vh' }, // Change height based on screen size
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Box sx={{ zIndex: 2, maxWidth: '600px', padding: '20px' }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: '"Oswald", sans-serif',
                  animation: `${fadeInUp} 1s ease-in`,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Stroke effect
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  animation: `${fadeInUp} 1s ease-in`,
                  animationDelay: '0.5s',
                  opacity: 0,
                  animationFillMode: 'forwards',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Stroke effect
                }}
              >
                {item.subtitle}
              </Typography>

              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: '8px',
                  padding: '10px 20px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  fontWeight: 'bold',
                  animation: `${zoomIn} 1s ease-in`,
                  animationDelay: '1s',
                  opacity: 0,
                  animationFillMode: 'forwards',
                  '&:hover': {
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {item.linkText}
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
