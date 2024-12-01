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
          <Route path="/users" element={<Users />} />
          {/* Add more routes as needed */}
          <Route path="/landing" element={<Landing/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;