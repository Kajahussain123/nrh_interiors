import React, { useState } from 'react';
import { Link, Box, Grid, TextField, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatIcon from '@mui/icons-material/Chat';
import CancelIcon from '@mui/icons-material/Cancel';
import { LocationOn, Phone, Email } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png';
import telephoneIcon from '../assets/telephone.png';
import facebookIcon from '../assets/facebook.png';

function ContactUs() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleToggleIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  // Function to handle WhatsApp redirection with form data
  const handleSendMessage = () => {
    const phoneNumber = '+918848902001'; // Your WhatsApp number
    const encodedMessage = `Hello, I am ${fullName}. My number is ${phoneNumber}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(encodedMessage)}`;

    window.open(whatsappUrl, '_blank'); // Opens WhatsApp with the pre-filled message
  };

  return (
    <div>
      <Header />
      
      {/* Floating Social Icons */}
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


      {/* Header Image with Title */}
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
          Contact US
        </Typography>
        </Box>
      </div>

      {/* Main Content: Map on the Left, Form on the Right */}
      <Box
      sx={{
        backgroundColor: '#e8d8b8',
        padding: '40px 20px',
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
  <Typography variant="h4" gutterBottom sx={{ color: "#a89160" }}>
    Request a Quote
  </Typography>
  <Typography variant="body1" paragraph>
    Contact us for any information or assistance. We're happy to assist with all your needs!
  </Typography>
</Box>

      <Grid container spacing={4} >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          {/* Address Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "15px", sm: "20px" },
              marginBottom: "20px",
              borderRadius: "8px",
              border: `1px solid #a89160`,
              transition: "transform 0.3s ease-in-out",
              textAlign: { xs: "center", md: "left" },
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, marginBottom: "10px", color: "#a89160" }}>
              <LocationOn sx={{ marginRight: "10px" }} />
              Address
            </Typography>
            <Typography>Hilite Business Park , Calicut , Kerala</Typography>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=402671+Sugar+Camp+Road,+Owatonna,+Minnesota+55025"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#a89160", textDecoration: "none", marginTop: "10px", display: "block", "&:hover": { textDecoration: "underline" } }}
            >
              View on Google Maps <AddLocationAltIcon/>
            </Link>
          </Box>

          {/* Phone Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "15px", sm: "20px" },
              marginBottom: "20px",
              borderRadius: "8px",
              border: `1px solid #a89160`,
              transition: "transform 0.3s ease-in-out",
              textAlign: { xs: "center", md: "left" },
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, marginBottom: "10px", color: "#a89160" }}>
              <Phone sx={{ marginRight: "10px" }} />
              Phone
            </Typography>
            <Typography>+918848902001</Typography>
          </Box>

          {/* Email Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "15px", sm: "20px" },
              marginBottom: "20px",
              borderRadius: "8px",
              border: `1px solid #a89160`,
              transition: "transform 0.3s ease-in-out",
              textAlign: { xs: "center", md: "left" },
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, marginBottom: "10px", color: "#a89160" }}>
              <Email sx={{ marginRight: "10px" }} />
              Email
            </Typography>
            <Typography>nrhinteriors@gmail.com</Typography>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '20px' }}>
      <Typography variant="h6" sx={{ color: '#a89160' }}>
        Connect with us
      </Typography>
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <IconButton
          component="a" // Make the IconButton behave like a link
          href="https://www.facebook.com/your-profile" // Replace with your Facebook profile URL
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
          sx={{ color: '#000', transition: 'color 0.3s', '&:hover': { color: '#a89160' } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.youtube.com/@NRHINTERIORS" // Replace with your Twitter profile URL
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#000', transition: 'color 0.3s', '&:hover': { color: '#a89160' } }}
        >
         <YouTubeIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/nrhinteriors?igsh=YjRhejRtdjFrZXph" // Replace with your Instagram profile URL
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#000', transition: 'color 0.3s', '&:hover': { color: '#a89160' } }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "20px", sm: "30px" },
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#a89160" }}>
              Send Message
            </Typography>
            <TextField
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
              InputLabelProps={{ style: { color: "#a89160" } }}
            />
            <TextField
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
              label="Phone No"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
              InputLabelProps={{ style: { color: "#a89160" } }}
            />
            <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
              label="Type your Message..."
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "20px" }}
              InputLabelProps={{ style: { color: "#a89160" } }}
            />
            <Button
            onClick={handleSendMessage}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#a89160",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#8a6d48",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    



      <Footer />
    </div>
  );
}

export default ContactUs;
