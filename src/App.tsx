import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Menus from './components/Menus';
import WebsiteSettings from './components/WebsiteSettings';

function App() {
  return (
    <Router basename="/heaneys-restaurant">
      <Routes>
        <Route path="/" element={<Menus />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/settings" element={<WebsiteSettings />} />
      </Routes>
    </Router>
  );
}

export default App;