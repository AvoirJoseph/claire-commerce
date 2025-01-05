import React from "react";
import './AnotherCSS.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Clair from "./Images/CLAIR-Logo.png";
import Profile from "./Images/Profile.png";
import FacebookLogo from "./Images/FacebookLogo.png";
import XLogo from "./Images/XLogo.png";
import InstagramLogo from "./Images/InstagramLogo.png";
import YoutubeLogo from "./Images/YoutubeLogo.png";
import BGVideo from "./Images/BG-Video.mp4";

const LogInPage = () => {
  const [userTable, setUserTable] = useState({
    userName: "",
    password: "",
  });

  const reload = () => {
    window.location.reload();
  };

  const clickProfileLogo = () => {
    window.location.href = "http://localhost:3000/LogInPage";
  };

  const navigate = useNavigate();

    const handleClick = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8800/login", userTable);
        if (response.data.success) {
          if (response.data.isAdmin) {
            // Redirect to Admin page
            navigate("/AdminViewFrontPage");
          } else {
            // Redirect to regular user page
            navigate("/frontpage");
          }
        } else {
          alert("Invalid username or password");
        }
      } catch (err) {
        alert("Error: " + err.message);
      }
    };
    
  const handleClickSignIn = () => {
    window.location.href = "http://localhost:3000/SignInPage"
  }
  const HandleChange = (e) => {
    setUserTable((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className = "background-background-background"> {/* Just Black */}
      <div className = "full-page">
        <div className = "navbar">
          {/* Nav Bar */}
          <div className = "logo-png">
            <img src = {Clair} title = "CLAIR LOGO" alt = "Clair Logo PNG" id = "logo" onClick = {reload} />
            <span> | C L A I R </span>
          </div>

          <div className="navbar-right-side">
            <ul>
              <li> <Link to="/LogInPage"> Log In </Link></li>
              <li> <Link to="/LogInPage"> Cart </Link></li>
              <li> <Link to="/LogInPage"> <span>Log In | Sign Up</span> </Link></li>
            </ul>
          </div>

          {/* Profile Dropdown */}
          <div className = "profile-logo-png">
            <img src = {Profile} title = "Profile LOGO" alt="Profile Logo" id = "profile-logo" onClick = {clickProfileLogo} />
          </div>
        </div> {/* Nav Bar */}

        <div className="body-below-nav">
          <video autoPlay muted loop preload = "auto" id = "bgVideo">
            <source src = {BGVideo} type = "video/mp4" />
          </video>

          <div className="loginsignup-form">
            <h1> Log-In </h1>
            <input type = "text" placeholder = "Enter your username" onChange = {HandleChange} name = "userName" />
            <input type = "password" placeholder = "Enter your password" onChange = {HandleChange} name = "password" />
            <button onClick = {handleClick}> Log In </button>
            <button onClick = {handleClickSignIn}> Sign In </button>
          </div>
        </div>

        <footer> &copy; 2025 Clair. All Rights Reserved 2024.  
          <a href="https://facebook.com/AvoirJoseph"> <img src={FacebookLogo} alt="Facebook" /></a>
          <a href="https://x.com/AvoirJoseph"> <img src={XLogo} alt="X" /></a>
          <a href="https://instagram.com/AvoirJoseph"> <img src={InstagramLogo} alt="Instagram" /></a> 
          <a href="https://youtube.com/@AvoirJoseph"> <img src={YoutubeLogo} alt="YouTube" /></a>
        </footer>
      </div> 
    </div>   
  );
};

export default LogInPage;
