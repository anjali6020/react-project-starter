import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: 3, mt: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
        <Box>
          <Typography variant="body2" color="inherit" align="center">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
