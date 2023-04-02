import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from 'Components/Sidebar/Sidebar';
import { PageLayout } from 'Components/PageLayout';
import Characters from 'Pages/Characters/Characters';

import './styles.css';

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#F5F5F5] flex">
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<PageLayout title="Dashboard" />} />
        <Route
          path="/characters"
          element={
            <PageLayout title="Characters">
              <Characters />
            </PageLayout>
          }
        />
        <Route path="/locations" element={<PageLayout title="Locations" />} />
        <Route path="/episodes" element={<PageLayout title="Episodes" />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default App;
