import React, { useState } from 'react';
import { Box, Dialog, Typography, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import image1 from '../../assets/FF BEDROOM 2.png';
import image2 from '../../assets/GF MASTER BEDROOM BATHROOM 0.2.png';
import image3 from '../../assets/GF bedroom 2 ...jpg';
import image4 from '../../assets/gf bedroom 1 (2).png';
import image5 from '../../assets/FF BEDROOM 02.png'
import image6 from '../../assets/FF BEDROOM 03.png'
import image7 from '../../assets/FF BEDROOM 2 02.png'
import image8 from '../../assets/FF BEDROOM 2 03.png'
import image9 from '../../assets/FF BEDROOM 2 04.png'
import image10 from '../../assets/FF BEDROOM 2 05.png'
import image11 from '../../assets/FF BEDROOM 2 BATHROOM 02.png'
import image12 from '../../assets/FF BEDROOM 2.png'
import image13 from '../../assets/FF BEDROOM BATHROOM 0.1.png'
import image14 from '../../assets/FF MASTER BEDROOM 01.png'
import image15 from '../../assets/FF MASTER BEDROOM 04.png'
import image16 from '../../assets/FF MASTER BEDROOM 05.png'
import image17 from '../../assets/FF MASTER BEDROOM 06.png'
import image18 from '../../assets/GF BATHROOM.png'
import image19 from '../../assets/GF MASTER BEDROOM .....png'
import image20 from '../../assets/GF MASTER BEDROOM ....png'
import image21 from '../../assets/GF MASTER BEDROOM ..png'
import image22 from '../../assets/GF MASTER BEDROOM 03.png'
import image23 from '../../assets/GF MASTER BEDROOM BATHROOM 0.1.png'
import image24 from '../../assets/M BEDROOM.png'
import image25 from '../../assets/ad.png'
import image26 from '../../assets/carousal1.png'
import image27 from '../../assets/carousal2.png'
import image28 from '../../assets/carousal3.png'
import image29 from '../../assets/bedroom.png'
import image30 from '../../assets/bathroom.png'
import image31 from '../../assets/living-room.png'
import kitchen1 from '../../assets/kitchen/kitchen 0 (2).png'
import kitchen2 from '../../assets/kitchen/kitchen 0 (3).png'
import kitchen3 from '../../assets/kitchen/kitchen 0 (4).png'
import kitchen4 from '../../assets/kitchen/kitchen 0 (5).png'
import kitchen5 from '../../assets/kitchen/kitchen.png'
import kitchen6 from '../../assets/kitchen/kithcen.png'
import kitchen7 from '../../assets/kitchen/rahul.dwg-Untitled-20241130-210526.png'
import kitchen8 from '../../assets/kitchen/rahul.dwg-Untitled-20241130-210530.png'
import kitchen9 from '../../assets/kitchen/rahul.dwg-Untitled-20241130-210533.png'



const bedroomImages = [
  image1,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image12,
  image14,
  image15,
  image16,
  image17,
  image19,
  image20,
  image21,
  image22,
  image24,
  image25,
  image26,
  image28,
  image29,
  image31,

];

const BathroomImage = [
  image2,
  image11,
  image13,
  image18,
  image23,
  image27,
  image30,

];

const kitchenImages = [
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  kitchen5,
  kitchen6,
  kitchen7,
  kitchen8,

];

function GallerySection() {
  const [open, setOpen] = useState(false); // Modal open state
  const [selectedImage, setSelectedImage] = useState(null); // Selected image
  const [visibleKitchenImages, setVisibleKitchenImages] = useState(4); // Number of kitchen images initially visible
  const [visibleBedroomImages, setVisibleBedroomImages] = useState(4); // Number of bedroom images initially visible
  const [isKitchenExpanded, setIsKitchenExpanded] = useState(false); // Track whether kitchen section is expanded
  const [isBedroomExpanded, setIsBedroomExpanded] = useState(false); // Track whether bedroom section is expanded

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const toggleView = (section) => {
    if (section === 'kitchen') {
      setIsKitchenExpanded(!isKitchenExpanded);
      setVisibleKitchenImages(isKitchenExpanded ? 4 : kitchenImages.length);
    } else if (section === 'bedroom') {
      setIsBedroomExpanded(!isBedroomExpanded);
      setVisibleBedroomImages(isBedroomExpanded ? 4 : bedroomImages.length);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e8d8b8',
        padding: { xs: '20px 10px', sm: '40px 20px' },
      }}
    >
      {/* <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          color: '#9e8856',
          marginBottom: '20px',
        }}
      >
        Image Gallery
      </Typography> */}

      {/* Masonry Grid Layout for Sections */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column on small screens
            sm: 'repeat(2, 1fr)', // 2 columns on medium screens
          },
          gap: '32px', // Spacing between grid items
        }}
      >

        <Box>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 'bold',
              color: '#9e8856',
              marginBottom: '20px',
              backgroundColor: "white"
            }}
          >
            Kitchen Images
          </Typography>

          {/* Bedroom Images Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2 columns on small screens
                sm: 'repeat(2, 1fr)', // 2 columns on medium screens
              },
              gap: '16px', // Spacing between grid items
            }}
          >
            {kitchenImages.slice(0, visibleBedroomImages).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleClickOpen(image)}
                style={{ cursor: 'pointer' }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index}`}
                  sx={{
                    width: '100%',
                    height: '200px', // Fixed height for grid items
                    objectFit: 'cover',
                    borderRadius: '8px', // Rounded corners
                  }}
                />
              </motion.div>
            ))}
          </Box>

          {/* View More Button for Bedroom Section */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9e8856',
                color: '#fff',
                '&:hover': { backgroundColor: '#7a6a45' },
              }}
              onClick={() => toggleView('bedroom')}
            >
              {isBedroomExpanded ? 'View Less' : 'View More'}
            </Button>
          </Box>
        </Box>
        {/* Kitchen Section */}
        <Box>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 'bold',
              color: '#9e8856',
              marginBottom: '20px',
              backgroundColor: "white"
            }}
          >
            Bedroom Images
          </Typography>

          {/* Kitchen Images Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2 columns on small screens
                sm: 'repeat(2, 1fr)', // 2 columns on medium screens
              },
              gap: '16px', // Spacing between grid items
            }}
          >
            {bedroomImages.slice(0, visibleKitchenImages).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleClickOpen(image)}
                style={{ cursor: 'pointer' }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index}`}
                  sx={{
                    width: '100%',
                    height: '200px', // Fixed height for grid items
                    objectFit: 'cover',
                    borderRadius: '8px', // Rounded corners
                  }}
                />
              </motion.div>
            ))}
          </Box>

          {/* View More Button for Kitchen Section */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9e8856',
                color: '#fff',
                '&:hover': { backgroundColor: '#7a6a45' },
              }}
              onClick={() => toggleView('kitchen')}
            >
              {isKitchenExpanded ? 'View Less' : 'View More'}
            </Button>
          </Box>
        </Box>

        {/* Bedroom Section */}
        <Box>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 'bold',
              color: '#9e8856',
              marginBottom: '20px',
              backgroundColor: "white"
            }}
          >
            Bathroom Images
          </Typography>

          {/* Bedroom Images Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2 columns on small screens
                sm: 'repeat(2, 1fr)', // 2 columns on medium screens
              },
              gap: '16px', // Spacing between grid items
            }}
          >
            {BathroomImage.slice(0, visibleBedroomImages).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleClickOpen(image)}
                style={{ cursor: 'pointer' }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index}`}
                  sx={{
                    width: '100%',
                    height: '200px', // Fixed height for grid items
                    objectFit: 'cover',
                    borderRadius: '8px', // Rounded corners
                  }}
                />
              </motion.div>
            ))}
          </Box>

          {/* View More Button for Bedroom Section */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9e8856',
                color: '#fff',
                '&:hover': { backgroundColor: '#7a6a45' },
              }}
              onClick={() => toggleView('bedroom')}
            >
              {isBedroomExpanded ? 'View Less' : 'View More'}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Modal for Viewing Image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              margin: '0 auto',
            }}
          />
        )}
      </Dialog>
    </Box>
  );
}

export default GallerySection;
