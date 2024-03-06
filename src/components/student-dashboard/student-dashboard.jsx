import * as React from 'react'
import './student-dashboard.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
function Student_dashboard() {
    return (
        <div>
            <div className="student-dashboard-cont">
                <div className="calendar">

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>


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
                <div className="companies-visited">
                    <h2>Companies visiting in upcoming week</h2>
                    <hr />
                    <div className="company-logo-cont">
                        <div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div>
                        <div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student_dashboard