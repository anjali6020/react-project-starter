import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          My App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ mx: 1 }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ mx: 1 }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ mx: 1 }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
