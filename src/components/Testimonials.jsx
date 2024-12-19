import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the testimonials
const testimonials = [
  {
    id: 1,
    text: "The team at NRH Interiors transformed my home beyond my expectations. Their attention to detail is unmatched.",
    author: "Kaja",
    title: "Will definitely be using NRH again",
    ratings: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    text: "What a fantastic experience! The design process was seamless, and I couldn't be happier with the results.",
    author: "Prithwi",
    title: "A great experience!",
     ratings: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    text: "I would highly recommend NRH Interiors to anyone looking for design services. They truly understand their clients.",
    author: "Hameem",
    title: "Highly recommended!",
     ratings: "⭐⭐⭐⭐"
  },
  {
    id: 4,
    text: "The designs were not only beautiful but also functional. They listened to my needs and delivered perfectly.",
    author: "Abijith",
    title: "Outstanding design service",
     ratings: "⭐⭐⭐⭐⭐"
  }
];

function Testimonials() {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Show 2 slides on tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Show 1 slide on mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      bgcolor: '#E9D9B8', 
      px: { xs: 2, sm: 4, md: 8 }, 
      py: 4, 
      overflow: 'hidden'  // Prevent overflow on mobile screens
    }}>
      <Typography variant="h5" gutterBottom align="center">
        Customer Testimonials
      </Typography>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>  {/* Ensures no overflow from the slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id} px={{ xs: 1, sm: 2, md: 2 }}>
              <TestimonialCard testimonial={testimonial} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: '300px',
        padding: 3,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s, box-shadow 0.3s',
        margin: { xs: '0', sm: '0 10px', md: '0 15px' }, // Remove margin on mobile screens
        '&:hover': {
          transform: 'scale(1.05)', // Scale on hover
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)', // Shadow on hover
        },
      }}
    >
      <Typography variant="subtitle1" component="div" gutterBottom>
        {testimonial.ratings}
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        {testimonial.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {testimonial.text}
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, fontWeight: 'bold' }}>
        by {testimonial.author}
      </Typography>
    </Paper>
  );
}

export default Testimonials;
