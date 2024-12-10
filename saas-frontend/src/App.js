import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CommunicationHistory from './components/CommunicationHistory';
import ComposeEmail from './components/ComposeEmail';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<CommunicationHistory />} />
      <Route path="/compose" element={<ComposeEmail />} />
    </Routes>
  </Router>
);

export default App;
