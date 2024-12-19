import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

function Help() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loading, setLoading] = useState(false); // Loading state

  const handleContactRedirect = () => {
    setLoading(true); // Set loading to true when button is clicked
    
    setTimeout(() => {
      navigate('/contactus'); // Redirect to the /contactus path
      window.scrollTo(0, 0);
      setLoading(false); // Reset loading state after redirect
    }, 1000); // Simulate loading time (adjust as necessary)
  };

  return (
    <Box
      sx={{
        backgroundColor: '#A58E6F',
        padding: { xs: '2rem', md: '4rem' }, // Increased padding for larger screens
      }}
    >
      {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
              Need Assistance?
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', marginTop: '1rem' }}>
              Our team is here to help you with any inquiries or support you may need. Whether it's about our services or your projects, don't hesitate to reach out!
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleContactRedirect}
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                textTransform: 'none',
                padding: '0.5rem 1.5rem',
              }}
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Help;
