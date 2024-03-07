
import './App.css';

import Landing_page from './components/landing_page/landing_page';
import Student_dashboard from './components/student-dashboard/student-dashboard';

import Navbar from './components/library/Navbar.jsx';


import data from './components/calendar/DataBase/data.jsx';
import Home from './components/library/home';
import Events from './components/calendar/Events/Events';
import Studentregistration from './components/login/registrationpage1';
import Experience from './components/library/inexpe';
import ChatApp from './components/chat/chat.jsx';
import Collegeregistration from './components/login/registrationpage3';
import Companyregistration from './components/login/registrationpage2';
import Recruiter_Dashboard from './components/recruiter-dashboard/recruiter-dashboard';
import {  Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Landing_page_second from './components/landing-page-second/landing-page-second.jsx';



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

         <Route path="/chat" element= {<ChatApp/>} />
         <Route path="/exp" element= {<Experience/>} />
         <Route path="/dashboard" element= {<Student_dashboard/>} />
         <Route path="/libhome" element= {<Home/>} />

         <Route path="/tpo" element= {<Recruiter_Dashboard />} />
         <Route path="/landing_2" element= {<Landing_page_second />} />


      </Routes>
     </BrowserRouter>
      
    </div>

  );
}

export default App;
