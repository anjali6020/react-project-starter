import { Container, Paper, Typography, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
        <InfoIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
        <Typography component="h1" variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          We are a dedicated platform focused on providing secure and efficient services to our users. Our mission is to improve user experience and ensure seamless access to information.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default About;
