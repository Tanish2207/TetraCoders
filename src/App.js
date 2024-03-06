
import './App.css';
import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';
import Input2 from './components/library/input2.jsx';
import Landing_page from './components/landing_page/landing_page';
import Input from './components/library/input.jsx';
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    // <Landing_page />
    <>
      <Home />
      <Navbar />
      {/* <Input /> */}
      {/* <Input2 /> */}
    </>
   
  );
}

export default App;
