import React from 'react'

function Landing_page_second() {
  return (
    <div>
        <div className="landing_page_second_cont">
            <div className="landing-2-box">
                <img src="/Students.png" alt="" />
                <h4>Students</h4>
                <p>A centralized platform for scheduling placement interviews. </p>
                <button className="get-started-btn students">Get Started</button>
            </div>
            <div className="landing-2-box">
                <h4>Recruiter</h4>
                <img src="/Recruiter.png" alt="" />
                <p>View upcoming interviews, and manage their calendar more effectively. </p>
                <button className="get-started-btn tpo">Get Started</button>
            </div>
            <div className="landing-2-box">
                <h4>College</h4>
                <img src="/Students.png" alt="" />
                <p>Easily track the status of each candidate</p>
            </div>
        </div>
    </div>
  )
}

export default Landing_page_second