import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import bedroom from '../../assets/bedroom.png'
import bathroom from '../../assets/bathroom.png'
import kitchen from '../../assets/kithcen.png'

// Fade-in animation for grid items
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Scale-up animation for hover effect
const scaleUpAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const rooms = [
  {
    name: 'Kitchen',
    imageUrl: kitchen,
  },
  {
    name: 'Living Room',
    imageUrl: 'https://i.postimg.cc/6TxZxZWn/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg', // Replace with actual image URL
  },
  {
    name: 'Bedroom',
    imageUrl: bedroom
  },
  {
    name: 'Dining Room',
    imageUrl: 'https://i.postimg.cc/59Y8j4FD/3d-rendering-scandinavian-vintage-modern-kitchen-with-dining-area.jpg', // Replace with actual image URL
  },
  {
    name: 'Bathroom',
    imageUrl: bathroom
  },
  {
    name: 'Kids Room',
    imageUrl: 'https://i.postimg.cc/zX950wzX/soft-pastel-hues-room-kids.jpg', // Replace with actual image URL
  },
];

function RoomGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for 100ms to start the animation after the component mounts

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#E9D9B8', // Light beige background color
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
      }}
    >
      {/* Grid Container with maxWidth to add space on left/right */}
      <Box sx={{ maxWidth: '1200px', width: '100%' }}>
        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f5f1e3',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  maxWidth: '500px', // Increased card width
                  margin: '0 auto',
                  animation: isVisible ? `${fadeInAnimation} 0.5s ease-in-out` : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    animation: `${scaleUpAnimation} 0.3s forwards`,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >

                {/* Room Image */}
                <Box
                  component="img"
                  src={room.imageUrl}
                  alt={room.name}
                  sx={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />

                {/* Room Name */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#9e8856', // Brownish color for the text
                    padding: '10px 0',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  {room.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RoomGrid;
