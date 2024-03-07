import * as React from 'react'
import './student-dashboard.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  
import ChatApp from '../chat/chat'; 
import { IoChatboxEllipsesOutline } from "react-icons/io5"; 



function Student_dashboard() {
   
        const [value, onChange] = useState(new Date());
        


 
    return (
        <div className=''>
            <div className="student-dashboard-cont">
                <div className="calendar">


                <Calendar onChange={onChange} showWeekNumbers value={value} />
      

                </div>

                <div className="my-div">
                    <div className="upcoming-interview">
                        <h3>Upcoming Interview</h3>
                        <h2><span>k</span>nimbus.com</h2>
                        <p>7 March, 2024</p>
                    </div>
                    <div className="application-deadlines">
                        <div className="left">
                            <img src="/clock.png" alt="" width="40%" />
                        </div>
                        <div className="right">
                            <h2>Scheduled Assignments</h2>
                            <h3>2 Problem Statements from AutoDesk Interview</h3>
                        </div>
                    </div>
                </div>
                
                <div className="contributions">
                    <h1>Contributions</h1>
                   
                    
                   
                </div>
                
            </div>
            
        </div>
    );
}

export default Student_dashboard