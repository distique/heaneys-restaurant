import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menus from './components/Menus';
import Admin from './components/Admin';
import WebsiteSettings from './components/WebsiteSettings';
import { SettingsProvider } from './context/SettingsContext';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <Router basename="/heaneys-restaurant">
        <Routes>
          <Route path="/" element={<Menus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<WebsiteSettings />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
};

export default App;