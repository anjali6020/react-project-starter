import { Container, Paper, Typography, Button } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
        <ContactMailIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
        <Typography component="h1" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          Have questions? Reach out to us via email at support@example.com or call us at (123) 456-7890.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default Contact;
