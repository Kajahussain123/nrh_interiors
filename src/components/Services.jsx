import React, { useEffect } from 'react';
import { Grid, Typography, Card, CardContent, Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function ServicesGrid() {
  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#f4f1ea', // Default background
            border: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#E9D9B8', // Background color on hover
              transform: 'scale(1.05)', // Scale effect on hover
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            '&:last-child': {
              paddingBottom: '16px', // Prevents additional padding added by MUI
            },
          },
        },
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define your images for each service
  const services = [
    { title: "Home Interior", imageUrl: "https://i.postimg.cc/Twx5YRM4/fe-home.png", description: "Transform your living spaces into a reflection of your style and comfort." },
    { title: "Planning", imageUrl: "https://i.postimg.cc/xTGHkx3Z/Vector.png", description: "Expert planning services to ensure every detail is covered." },
    { title: "Construction", imageUrl: "https://i.postimg.cc/hGc2zQmL/ic-outline-construction.png", description: "Quality construction services that meet your timelines and standards." },
    { title: "Home Exterior", imageUrl: "https://i.postimg.cc/vHG7vwTy/Vector-1.png", description: "Enhance your home's curb appeal with our exterior solutions." },
    { title: "Engineering", imageUrl: "https://i.postimg.cc/mDwkLJs3/clarity-design-line.png", description: "Innovative engineering solutions for every project." },
    { title: "Architecture", imageUrl: "https://i.postimg.cc/NMpGqX6p/fluent-design-ideas-24-regular.png", description: "Architectural designs that blend functionality with aesthetics." },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
        <Box
          sx={{
            height: '1px',
            width: '35%',
            backgroundColor: '#000',
            marginRight: 2,
          }}
        />
        <Typography variant="h5" gutterBottom align="center">
          <b>WHAT WE DO</b>
        </Typography>
        <Box
          sx={{
            height: '1px',
            width: '35%',
            backgroundColor: '#000',
            marginLeft: 2,
          }}
        />
      </Box>
      <Typography variant="h6" gutterBottom align="center" sx={{ fontSize: "16px" }}>
        Complete personalization by qualified and experienced interior designers. <br /> Be ready for a serene experience with us!
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4} sx={{ px: 3, mx: 'auto', width: 'auto', maxWidth: 'lg' }}>
        {services.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <motion.div
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }} // Scale down effect on tap
            >
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: 48, height: 48, marginBottom: 8 }} />
                  <Typography component="div" variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default ServicesGrid;
