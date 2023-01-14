import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from 'Components/Sidebar/Sidebar';

import './styles.css';

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#F5F5F5] flex">
      <Sidebar />
      <div className="w-full h-full p-[24px]">
        <Routes>
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/characters" element={<div>Characters</div>} />
          <Route path="/locations" element={<div>Locations</div>} />
          <Route path="/episodes" element={<div>Episodes</div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
