import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import InfoSection from '../components/Info';
import DesignSection from '../components/Design';
import ProjectCompletion from '../components/ProjectCompletion';
import Solution from '../components/Solution';
import ServicesGrid from '../components/Services';
import Testimonials from '../components/Testimonials';
import VendorSection from '../components/ContactUS';
import Footer from '../components/Footer';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CancelIcon from '@mui/icons-material/Cancel';
import Loader from '../components/Loader';
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png';
import telephoneIcon from '../assets/telephone.png';
import facebookIcon from '../assets/facebook.png';

function Home() {
  const [loading, setLoading] = useState(true);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleToggleIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: "#f6f0e6", position: 'relative' }}>
      <Header />

      {/* Social Icons for Mobile */}
      {isMobile ? (
        <Box
          sx={{
            position: 'fixed',
            top: '70%',
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
      {/* Main Sections */}
      <div>
        <CustomCarousel />
      </div>
      <div>
        <InfoSection />
      </div>
      <div>
        <DesignSection />
      </div>
      <div>
        <ProjectCompletion />
      </div>
      <div style={{ marginTop: "80px" }}>
        <Solution />
      </div>
      <div>
        <ServicesGrid />
      </div>
      <div style={{ marginTop: "80px" }}>
        <Testimonials />
      </div>
      <div>
        <VendorSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
