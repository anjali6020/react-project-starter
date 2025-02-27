import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Home from './pages/Home';
import Login from './componets/Auth/Login';
import Register from './componets/Auth/Register';
import Navbar from './componets/Layout/Navbar';
import Footer from './componets/Layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Box sx={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Container>
        < Footer/>
      </Box>
    </Router>
  );
}

export default App;
