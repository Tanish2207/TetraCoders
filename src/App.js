
import './App.css';
import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';

import Landing_page from './components/landing_page/landing_page';

import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    // <Landing_page />
    <>
      <Home />
      <Navbar />
    </>
  );
}

export default App;
