import { Container, Box, Typography, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
        <HomeIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <InfoIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          This is a demo home page. Navigate to other sections using the menu. Here you will find important information and updates.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          Why Choose Us?
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Easy to use and navigate" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Secure and reliable platform" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Regular updates and improvements" />
          </ListItem>
        </List>
        
        <Button variant="contained" color="primary" onClick={() => navigate('/login')} sx={{ mb: 2 }}>
          Go to Login
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate('/register')}>
          Register Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
