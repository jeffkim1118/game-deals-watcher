import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
