import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider/Slider';
import Events from './components/Events/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Events />
      <Footer />
    </>
  );
}

function LoginPage() {
  // Login sayfası içeriği
}

function RegisterPage() {
  // Register sayfası içeriği
}

export default App;
