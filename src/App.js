
import './App.css';
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
    <div className="App">
      {/* <Navbar />
      <Home /> */}
      <Events />

    </div>
  );
}

export default App;
