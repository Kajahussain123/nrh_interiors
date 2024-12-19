import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, Card, CardMedia, CardContent, useMediaQuery } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Help from '../components/About/Help';
import ChatIcon from '@mui/icons-material/Chat';
import CancelIcon from '@mui/icons-material/Cancel';
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png';
import telephoneIcon from '../assets/telephone.png';
import facebookIcon from '../assets/facebook.png';

function Offers() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleToggleIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };
  return (
    <div>
      <Header />
       {/* Social Icons for Mobile */}
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
         What We Offer ?
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#f9f4ee',
          padding: '50px 20px',
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Existing Cards */}
          {[
            {
              title: 'Custom Interior Design',
              description: 'Transform your space with our bespoke interior design services tailored to your style and preferences. Experience elegance and functionality in every corner of your home.',
              image: 'https://i.postimg.cc/6TxZxZWn/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg',
            },
            {
              title: 'Premium Furniture Selection',
              description: 'Explore our curated collection of premium furniture that combines style and comfort. Each piece is selected to enhance the aesthetic appeal of your interior spaces.',
              image: 'https://i.postimg.cc/xCKYR7JY/scandinavian-living-room-interior-design-zoom-background.jpg',
            },
            {
              title: 'Professional Installation Services',
              description: 'Our experienced team ensures that all installations are carried out with precision and care, guaranteeing a seamless transformation of your space.',
              image: 'https://i.postimg.cc/tgZ0kPFN/interior-designer-working-with-young-couple.jpg',
            },
            // New Cards
            {
              title: 'Lighting Solutions',
              description: 'Illuminate your space with our modern and elegant lighting solutions that enhance the beauty of your interiors.',
              image: 'https://i.postimg.cc/15d430Rp/luxury-modern-apartment-with-elegant-home-decor-generated-by-ai.jpg',
            },
            {
              title: 'Eco-Friendly Materials',
              description: 'Choose sustainable design with our eco-friendly materials that don’t compromise on style or functionality.',
              image: 'https://i.postimg.cc/4NbzSSXW/top-view-boards-mdf-material.jpg',
            },
            {
              title: 'Space Planning',
              description: 'Optimize your space with our expert space planning services, ensuring every inch is utilized effectively.',
              image: 'https://i.postimg.cc/qRm6cPrF/crop-hands-enlarging-draft-tablet.jpg',
            },
          ].map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9e8856' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#9e8856', lineHeight: 1.8 }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Help />
      <Footer />
    </div>
  );
}

export default Offers;
