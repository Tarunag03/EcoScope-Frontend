
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import LoginPage from './pages/Login' // Your login/signup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>

  );
}

export default App;
