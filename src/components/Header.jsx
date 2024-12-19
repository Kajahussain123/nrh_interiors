import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import your Loader component

const pages = ['Home', 'About', 'Products', 'Gallery', 'Offers', 'Contact US'];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageNavigation = (page) => {
    setLoading(true); // Set loading to true before navigation
    handleCloseNavMenu();

    // Simulate a delay for loading (replace this with your actual data loading logic)
    setTimeout(() => {
      switch (page) {
        case 'Home':
          navigate('/');
          break;
        case 'About':
          navigate('/about');
          break;
        case 'Products':
          navigate('/products');
          break;
        case 'Gallery':
          navigate('/gallery');
          break;
        case 'Offers':
          navigate('/offers');
          break;
        case 'Contact US':
          navigate('/contactus');
          break;
        default:
          break;
      }
      setLoading(false); // Hide loader after navigation
      window.scrollTo(0, 0);
    }, 1000); // Simulated loading time (1 second)
  };

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading is true */}
      <AppBar
        position="sticky"
        style={{
          backgroundColor: '#F5F1E4',
          color: '#A48F5B',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Added shadow effect here
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePageNavigation(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link to={'/'} style={{ textDecoration: "none", color: 'inherit', marginRight: "116px" }}>
              <Box

                component="a"
                sx={{
                  display: { xs: 'flex', md: 'flex' },
                  flexGrow: 1,
                  justifyContent: { xs: 'flex-start', md: 'flex-start' },  // Align logo to the left on mobile
                  textDecoration: 'none',
                  color: 'inherit',

                }}
              >
                <Box
                  component="img"
                  src="https://i.postimg.cc/MKWDSZtk/NRH-red-white.png"
                  alt="NRH Interiors"
                  sx={{
                    height: '70px',  
                    width: '150px', 
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Link>
            {/* <Link to={'/'} style={{ textDecoration: "none", color: 'inherit' }}>
  <Box
    component="a"
    sx={{
      display: { xs: 'flex', md: 'flex' },
      flexGrow: 1,
      justifyContent: { xs: 'flex-start', md: 'flex-start' },  // Align logo to the left on mobile
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative',
      marginBottom: '-20px', // Adjust this to control how much the logo sticks out
    }}
  >
    <Box
      component="img"
      src="https://i.postimg.cc/MKWDSZtk/NRH-red-white.png" // Replace with your logo URL
      alt="NRH Interiors"
      sx={{
        height: '100px',  // Match this with the logo height you prefer
        width: 'auto',  // Keep width auto to maintain proportions
        objectFit: 'contain'
      }}
    />
  </Box>
</Link> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: '40px',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageNavigation(page)}
                  sx={{ my: 2, color: 'inherit', display: 'block', fontWeight: 'bold' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', ml: 'auto' }}>
              <IconButton
                style={{ backgroundColor: '#A48F5B', color: '#fff', padding: '10px' }}
                aria-label="call now"
                onClick={() => window.location.href = 'tel:+918848902001'} // Use tel: protocol
              >
                <CallIcon />
              </IconButton>
              {!isMobile && <Typography>Call Now</Typography>}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
