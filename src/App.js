
import './App.css';
<<<<<<< HEAD
import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';
import Input2 from './components/library/input2.jsx';
import Landing_page from './components/landing_page/landing_page';
import Input from './components/library/input.jsx';
import { Link, Route, Routes } from 'react-router-dom'
=======

import Landing_page from './components/landing_page/landing_page';
import Student_dashboard from './components/student-dashboard/student-dashboard';

import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';
import Studentregistration from './components/login/registrationpage1.jsx';
import data from './components/calendar/DataBase/data.jsx';
import Home from './components/library/home';
import Events from './components/calendar/Events/Events';
import Studentregistration from './components/login/registrationpage1';
import Experience from './components/library/inexpe';
import Landing_page from './components/landing_page/landing_page';
import Collegeregistration from './components/login/registrationpage3';
import Companyregistration from './components/login/registrationpage2';
import {  Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';



>>>>>>> 6e1f905a7995391cdf5fe3b9a27b9fecb4d8082a
function App() {
  useEffect(()=>{
    
    localStorage.setItem("events", JSON.stringify(data));
  },[])

  return (

    // <Landing_page />
<<<<<<< HEAD
    <>
      <Home />
      <Navbar />
      {/* <Input /> */}
      {/* <Input2 /> */}
    </>
   
=======
    <Student_dashboard />

    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/companyr" element= {<Companyregistration/>} />
         <Route path="/colleger" element= {<Collegeregistration/>} />
         <Route path="/studentr" element= {<Studentregistration/>} />
         <Route path="/events" element= {<Events/>} />
         <Route path="/" element= {<Landing_page/>} />
         <Route path="/exp" element= {<Experience/>} />
         <Route path="/libhome" element= {<Home/>} />
      </Routes>
     </BrowserRouter>
      

    </div>

>>>>>>> 6e1f905a7995391cdf5fe3b9a27b9fecb4d8082a
  );
}

export default App;
