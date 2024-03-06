
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
import Events from './components/calendar/Events/Events.jsx';
import { useEffect } from 'react';



>>>>>>> 6e1f905a7995391cdf5fe3b9a27b9fecb4d8082a
function App() {
  useEffect(()=>{
    // const DATA = JSON.parse(localStorage.getItem('events'));
    // if(!DATA){
    //   localStorage.setItem("events", JSON.stringify(data));
    // }
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
      {/* <Navbar />
      <Home /> */}
      <Events />

    </div>

>>>>>>> 6e1f905a7995391cdf5fe3b9a27b9fecb4d8082a
  );
}

export default App;
