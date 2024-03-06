
import './App.css';

import Landing_page from './components/landing_page/landing_page';
import Student_dashboard from './components/student-dashboard/student-dashboard';

import Navbar from './components/library/Navbar.jsx';


import data from './components/calendar/DataBase/data.jsx';
import Home from './components/library/home';
import Events from './components/calendar/Events/Events';
import Studentregistration from './components/login/registrationpage1';
import Experience from './components/library/inexpe';

import Collegeregistration from './components/login/registrationpage3';
import Companyregistration from './components/login/registrationpage2';
import {  Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    
    localStorage.setItem("events", JSON.stringify(data));
  },[])

  return (

    // <Landing_page />
    
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

  );
}

export default App;
