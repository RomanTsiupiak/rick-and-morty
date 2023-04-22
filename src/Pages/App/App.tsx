import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from 'Components/Sidebar/Sidebar';
import { PageLayout } from 'Components/PageLayout';
import ComingSoon from 'Components/ComingSoon';
import Characters from 'Pages/Characters/Characters';

import './styles.css';

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#F5F5F5] flex">
      <Sidebar />
      <Routes>
        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <PageLayout title="Dashboard">
              <ComingSoon />
            </PageLayout>
          }
        />
        {/* CHARACTERS */}
        <Route
          path="/characters"
          element={
            <PageLayout title="Characters">
              <Characters />
            </PageLayout>
          }
        />
        <Route
          path="/characters/:id"
          element={
            <PageLayout title="Profile">
              <ComingSoon />
            </PageLayout>
          }
        />
        {/* LOCATIONS */}
        <Route
          path="/locations"
          element={
            <PageLayout title="Locations">
              <ComingSoon />
            </PageLayout>
          }
        />
        {/* EPISODES */}
        <Route
          path="/episodes"
          element={
            <PageLayout title="Episodes">
              <ComingSoon />
            </PageLayout>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default App;
