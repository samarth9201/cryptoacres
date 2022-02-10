import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import NavbarItems from './NavbarItems';
import '../../css/Navbar.css';
import { isUserLoggedIn } from '../../utils/AuthenticateUser';

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='navbar'>
        <Toolbar disableGutters>

          {/* Mobile view */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/" className='navbar-logo'>CRYPTOACRES</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className='menu-icon'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavbarItems.map((item) => (
                <Link to={item.link} className='navbar-links'>
                  <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Desktop view */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/" className='navbar-logo'>CRYPTOACRES</Link>
          </Typography>

          <Box className='navbar-box' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {NavbarItems.map((item) => (
              <Link to={item.link} className='navbar-links navbar-links-desktop'>
              <Button
                key={item.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {item.title}
              </Button>
              </Link>
            ))}

            {!props.logInStatus && <Link to='/user-signup' className='user-signup-btn'>
            <Button
                sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Signup
            </Button>
            </Link>}

            {!props.logInStatus && <Link to='/user-login' className='user-login-btn'>
            <Button
              variant="contained"
              sx={{ my: 2, color: 'white', display: 'block', backgroundColor: '#014DFF' }}
            >
              Login
            </Button>
            </Link>}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;