import React from 'react';
import './navdash.css';
import ChatApp from '../chat/chat';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PopUpComponent = ({ onClose }) => {
  return (
    <ChatApp />

  );
};

const Navdash = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
  
  return (
    <div class="navdash-container">
      <nav>
        <ul>
          <li class="logo-img-dash">
            <Link to="/landing_page"><a href="#">
              <img src="logo-img.png" width="33%" />
            </a>
            </Link>
          </li>
          <li class="toggle"><img src="images/hamburger.png" alt="" /></li>
          <li class="links"><Link to="./Studentregistration"><a href="#about-section">Students</a></Link></li>
          <li class="links"><a href="#projects-cont">TPO</a></li>
          <li class="links"><a href="#projects-cont">Reviews</a></li>
          
          <li class="links"><a href="#contact-section" id="lets-chat">Chat</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navdash;


