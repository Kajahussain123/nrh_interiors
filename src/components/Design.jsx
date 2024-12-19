import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import BedroomImage from '../../src/assets/bedroom.png';
import LivingRoomImage from '../../src/assets/living-room.png';
import BathroomImage from '../../src/assets/bathroom.png';
import kitchenImage from '../../src/assets/kithcen.png'



const DesignCard = ({ card, index }) => {

  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5, delay: index * 0.1 } },
    hidden: { opacity: 0, translateY: 50 },
  };

  const handleViewGallery = async () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate('/gallery'); // Redirect to the /gallery path
      window.scrollTo(0, 0); // Scroll to the top of the page
      setLoading(false); // Stop loading after redirection
    }, 1000); // Adjust the delay as needed
  };

  return (
    <Grid item xs={12} sm={6} md={6}>
      {loading ? ( // Show loader when loading
        <Loader />
      ) : (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
        >
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              height: '200px',
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Stroke effect for the heading
              }}
            >
              {card.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#fff',
                textAlign: 'center',
                fontSize: '20px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Stroke effect for the description
              }}
            >
              {card.description}
            </Typography>

            <Button
              onClick={handleViewGallery}
              variant="contained"
              sx={{
                borderRadius: "30px",
                height: "40px",
                backgroundColor: '#fff',
                color: 'green',
                alignSelf: 'flex-end',
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
            >
              View More Works
            </Button>
          </Box>
        </motion.div>
      )}
    </Grid>
  );
};


const DesignSection = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loading, setLoading] = useState(false);
  const cardData = [
    {
      title: 'Modular Kitchen',
      description: 'Smart Designs for the Heart of Your Home',
      image:  kitchenImage,
    },
    {
      title: 'Bedroom',
      description: 'Creating Cozy Spaces for Sweet Dreams',
      image: BedroomImage,
    },
    {
      title: 'Kids Bedroom',
      description: 'Designing Fun, Cozy Havens for Growing Minds',
      image:  'https://i.postimg.cc/P5jr0jm0/small-juvenile-bedroom-arrangement.jpg',
    },
    {
      title: 'Living Room',
      description: 'Crafting Welcoming Spaces for Living and Relaxing',
      image: LivingRoomImage,
    },
    {
      title: 'Dining Room',
      description: 'Designing Spaces for Flavorful Gatherings',
      image:  'https://i.postimg.cc/59Y8j4FD/3d-rendering-scandinavian-vintage-modern-kitchen-with-dining-area.jpg',
    },
    {
      title: 'Bathroom',
      description: 'Crafting Elegant Retreats for Relaxation',
      image: BathroomImage,
    },
  ];

  const handleContactRedirect = async () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate('/contactus'); // Redirect to the /contactus path
      window.scrollTo(0, 0); // Scroll to the top of the page
      setLoading(false); // Stop loading after redirection
    }, 1000); // Adjust the delay as needed
  };

  return (
    <Box sx={{ backgroundColor: '#f6f0e6', padding: '50px 0', fontFamily: '"Space Grotesk", sans-serif' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            A Beautiful Home Is A Dream Come True
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Make every space of your home own a piece of character with our insights
          </Typography>
          <Button
          onClick={handleContactRedirect}
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: '#a89160',
              color: '#fff',
              padding: '10px 30px',
              '&:hover': { backgroundColor: '#8c734f' },
            }}
          >
            Get your Design consultation
          </Button>
        </Box>

        {loading ? ( // Show loader when loading
          <Loader />
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {cardData.map((card, index) => (
              <DesignCard card={card} index={index} key={index} />
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default DesignSection;