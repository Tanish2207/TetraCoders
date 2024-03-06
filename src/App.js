
import './App.css';

import Landing_page from './components/landing_page/landing_page';
import Student_dashboard from './components/student-dashboard/student-dashboard';

import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';
import Studentregistration from './components/login/registrationpage1.jsx';
import data from './components/calendar/DataBase/data.jsx';
import Events from './components/calendar/Events/Events.jsx';
import { useEffect } from 'react';



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
    // <Student_dashboard />

    // <Events />


  );
}

export default App;
