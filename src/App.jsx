import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './elements/navbar/Navbar';
import Body from './components/body/Body';
import Main from './components/main/Main';
import Genre from './components/pages/genre/Genre';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Body />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>
    </Router>
  );
}

export default App;
