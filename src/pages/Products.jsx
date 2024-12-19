import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import RoomGrid from '../components/Products/RoomGrid';
import Footer from '../components/Footer';
import ChatIcon from '@mui/icons-material/Chat';
import CancelIcon from '@mui/icons-material/Cancel';
import Help from '../components/About/Help';
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png';
import telephoneIcon from '../assets/telephone.png';
import facebookIcon from '../assets/facebook.png';


function Products() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleToggleIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <div style={{ backgroundColor: "#f6f0e6", position: 'relative' }}>
      <Header />
      {isMobile ? (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={handleToggleIcons}
            sx={{
              backgroundColor: '#B59F6A',
              color: 'white',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              '&:hover': {
                backgroundColor: '#967C55',
              },
            }}
          >
            {showSocialIcons ? <CancelIcon /> : <ChatIcon />}
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
              opacity: showSocialIcons ? 1 : 0,
              transform: showSocialIcons ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
          >
            {showSocialIcons && (
              [instagramIcon, facebookIcon, telephoneIcon, whatsappIcon].map((src, index) => (
                <IconButton
                  key={index}
                  href={
                    index === 0
                      ? 'https://www.instagram.com/nrhinteriors?igsh=YjRhejRtdjFrZXph'
                      : index === 1
                        ? 'https://facebook.com'
                        : index === 2
                          ? 'tel:+123456789'
                          : 'https://wa.me/+918848902001'
                  }
                  target={index < 2 ? "_blank" : undefined}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      animation: 'lightning 0.3s forwards',
                    },
                    '@keyframes lightning': {
                      '0%': {
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        transform: 'scale(1)',
                      },
                      '50%': {
                        boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
                        transform: 'scale(1.1)',
                      },
                      '100%': {
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        transform: 'scale(1)',
                      },
                    },
                  }}
                >
                  <img src={src} alt="Icon" style={{ width: '40px', height: '40px', filter: 'drop-shadow(0 0 5px white)' }} />
                </IconButton>
              ))
            )}
          </Box>
        </Box>
      ) : (
        <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {[instagramIcon, facebookIcon, telephoneIcon, whatsappIcon].map((src, index) => (
          <IconButton
            key={index}
            href={
              index === 0
                ? 'https://www.instagram.com/nrhinteriors?igsh=YjRhejRtdjFrZXph'
                : index === 1
                  ? 'https://facebook.com'
                  : index === 2
                    ? 'tel:+123456789'
                    : 'https://wa.me/+918848902001'
            }
            target={index < 2 ? "_blank" : undefined}
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
                animation: 'lightning 0.3s forwards',
              },
              '@keyframes lightning': {
                '0%': {
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  transform: 'scale(1)',
                },
                '50%': {
                  boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
                  transform: 'scale(1.1)',
                },
                '100%': {
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  transform: 'scale(1)',
                },
              },
            }}
          >
            <img src={src} alt="Icon" style={{ width: '40px', height: '40px', filter: 'drop-shadow(0 0 5px white)' }} />
          </IconButton>
        ))}
      </Box>
      )}
      <div>
        <Box
          sx={{
            backgroundImage: `url('https://i.postimg.cc/PqCqWFJv/modern-minimalist-office.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '185px',
          }}
        >
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
         Our Products
        </Typography>
        </Box>
      </div>
      <div>
        <RoomGrid />
      </div>
      <div>
        <Help />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
