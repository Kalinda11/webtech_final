import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from '../src/components/pages/Users';
import { Toaster } from 'react-hot-toast';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Toaster />
      <div className="min-h-screen bg-gray-100">
      <Routes>
  <Route path="/" element={<Landing />} /> {/* Default landing page */}
  <Route path="/users" element={<Users />} />
  <Route path="/landing" element={<Landing />} />
  <Route path="/login" element={<Login />} />
  {/* Add more routes as needed */}
</Routes>

      </div>
    </Router>
  );
}

export default App;