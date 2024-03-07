import * as React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './recruiter-dashboard.css';

function Recruiter_Dashboard() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className="recr-dash-cont text-center">
                <div className="calendar-cont">

                    <div className="calendar">
                        <Calendar onChange={onChange} showWeekNumbers value={value} />
                    </div>

                </div>
                <div className="selected-candidates-cont">
                    <h2 className="selected-title">Selected Candidates</h2>
                    <div className="candidate-container">
                        
                            <h2 className="text-slate-500 mycandidate">Name</h2>
                            <h2 className="text-slate-500">Branch</h2>
                            <h2 className="text-slate-500">Contact</h2>
                        
                            <p className="mycandidate">Tanish</p>
                            <p>IT</p>
                            <p>24242412234</p>
                            <p className="mycandidate">Prathamesh</p>
                            <p>CS</p>
                            <p>24242423434</p>
                            <p className="mycandidate">Kartikay</p>
                            <p>Mechanical</p>
                            <p>24242234</p>
                            <p className="mycandidate">Ayaan</p>
                            <p>IT</p>
                            <p>2424223244</p>
                        

                    </div>

                </div>

                <div className="upcoming-interviews-cont">
                    <h3>Upcoming Interview</h3>
                    <h2><span>k</span>nimbus.com</h2>
                    <p>7 March, 2024</p>
                    <h2><span>k</span>nimbus.com</h2>
                    <p>7 March, 2024</p>
                    <h2><span>k</span>nimbus.com</h2>
                    <p>7 March, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Recruiter_Dashboard