import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import your Loader component

export default function Footer() {
  const [loading, setLoading] = useState(false); // State for loader
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true); // Show loader on link click
  
    // Simulate a delay for loading (replace with actual navigation logic)
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0); // Scroll to the top of the page
      setLoading(false); // Hide loader after navigation
    }, 1000); // Simulated loading time (1 second)
  };
  

  return (
    <Box sx={{ backgroundColor: '#FAF7F0', padding: '3rem 2rem' }}>
      {loading && <Loader />} {/* Show loader when loading */}
      <Grid container spacing={4}>
        {/* Company Info Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '24px', letterSpacing: '0.1rem' }}>
            NRH Interiors
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem', color: 'gray' }}>
            At NRH Interiors, we specialize in creating bespoke interior solutions for both residential and commercial spaces. With a passion for design and attention to detail, we aim to transform spaces into functional works of art.
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '1rem', fontSize: '20px' }}>
            +91 8848902001
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem', color: 'gray' }}>
            contact@nrhinteriors.com
          </Typography>
          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <IconButton href="https://www.instagram.com/nrhinteriors?igsh=YjRhejRtdjFrZXph" target="_blank" rel="noopener noreferrer" sx={{ color: '#E1306C' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#4267B2' }}>
              <FacebookIcon />
            </IconButton>
           
            <IconButton href="https://www.youtube.com/@NRHINTERIORS" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF0000' }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links and Our Services - On mobile, these will be in the same row */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            {/* Quick Links */}
            <Grid item xs={6} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Quick Links
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/')}>Home</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/about')}>About Us</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/products')}>Products</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/gallery')}>Gallery</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/offers')}>Offers</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem', color: 'black', cursor: 'pointer' }} onClick={() => handleNavigation('/contactus')}>Contact</Typography>
            </Grid>

            {/* Our Services */}
            <Grid item xs={6} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Our Products
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Modular Kitchen</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Living Room Interior</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Dining Interior</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Bedroom Interior</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Decorative</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Subscription Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1.5rem', color: 'gray' }}>
            Stay updated with the latest trends in interior design and get exclusive offers straight to your inbox.
          </Typography>
          {/* Email Input */}
          <TextField
            placeholder="Enter your email address"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: 'white',
              borderRadius: '30px',
              '& fieldset': { borderColor: '#ddd', borderRadius: '30px' }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    sx={{ backgroundColor: '#B59F6A', color: 'white', borderRadius: '50%' }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
