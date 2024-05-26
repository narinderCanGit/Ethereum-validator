import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import ValidatorDetails from './components/ValidatorDetails';
import ValidatorSearch from './components/ValidatorSearch';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Validator/:id" element={<ValidatorDetails />} />
            <Route path="/Validator" element={<ValidatorSearch />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;