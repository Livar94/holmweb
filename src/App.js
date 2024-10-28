import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes> 
    </Layout>
  );
}

export default App;
