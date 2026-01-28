import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
