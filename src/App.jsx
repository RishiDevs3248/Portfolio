import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Nav from './pages/Nav';



function AppContent() {
  const location = useLocation();

  // Only show "Nav bar" on specific paths
  const showNav = location.pathname !== '/';

  return (
    <>
      {showNav && <div><Nav></Nav></div>}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prj" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
