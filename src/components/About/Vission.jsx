import React, { useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function MissionVisionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f6f0e6', // Light beige background
        padding: '60px 20px',
      }}
    >
      {/* Mission Section */}
      <div data-aos="fade-up">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: '"Space Grotesk", sans-serif',
            color: '#8E7C57', // Golden tan color
          }}
        >
          Our Mission
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '18px',
            textAlign: 'center',
            color: '#6D5D4B', // Subtle dark brown for text
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          We aim to expand our footprint to overseas markets by enhancing our production capabilities and increasing our workforce.
          At the same time, we are committed to setting new benchmarks in quality, making our mark in the interior design industry across Kerala and India.
        </Typography>
      </div>

      {/* Divider */}
      <Divider sx={{ margin: '40px auto', width: '50%', backgroundColor: '#a89160' }} />

      {/* Vision Section */}
      <div data-aos="fade-up">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: '"Space Grotesk", sans-serif',
            color: '#8E7C57', // Golden tan color
          }}
        >
          Our Vision
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '18px',
            textAlign: 'center',
            color: '#6D5D4B', // Subtle dark brown for text
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          We envision a business that endures for generations, fostering a legacy of innovation, quality, and sustainability.
          By mentoring future leaders, adopting cutting-edge technology, and embracing eco-conscious practices, we aim to adapt to a changing world while staying rooted in our core values.        </Typography>
      </div>

      {/* Divider */}
      <Divider sx={{ margin: '40px auto', width: '50%', backgroundColor: '#a89160' }} />

      {/* Core Values Section */}
      <div data-aos="fade-up">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: '"Space Grotesk", sans-serif',
            color: '#8E7C57', // Golden tan color
          }}
        >
          Our Core Values
        </Typography>

        <Box
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '18px',
            textAlign: 'center',
            color: '#6D5D4B', // Subtle dark brown for text
            fontFamily: '"Space Grotesk", sans-serif',
            lineHeight: 1.6,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><strong>• Innovation:</strong> We continuously push the boundaries of creativity and explore modern design solutions that inspire.</li>
            <li><strong>• Quality:</strong> Our commitment lies in delivering durable, functional, and aesthetically pleasing designs.</li>
            <li><strong>• Integrity:</strong> Transparency, honesty, and respect form the foundation of our interactions and decisions.</li>
            <li><strong>• Customer Satisfaction:</strong> Meeting and exceeding client expectations is at the heart of everything we do.</li>
            <li><strong>• Sustainability:</strong> We are dedicated to using eco-friendly practices and materials to build a better future.</li>
          </ul>

        </Box>
      </div>

      {/* Conclusion Section */}
      <Box sx={{ textAlign: 'center', marginTop: '60px' }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 'bold',
            color: '#8E7C57',
          }}
        >
          Let's Build Your Dream Space Together!
        </Typography>
      </Box>
    </Box>
  );
}

export default MissionVisionSection;
