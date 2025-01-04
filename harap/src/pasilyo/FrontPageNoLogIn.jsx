import React, { useState, useEffect } from "react"
import './AnotherCSS.css';
import { Link } from "react-router-dom";

import Clair from "./Images/CLAIR-Logo.png";
import Profile from "./Images/Profile.png";
import Search from "./Images/Search Logo.png";
import BGVideo from "./Images/BG-Video.mp4";

import FacebookLogo from "./Images/FacebookLogo.png";
import XLogo from "./Images/XLogo.png";
import InstagramLogo from "./Images/InstagramLogo.png";
import YoutubeLogo from "./Images/YoutubeLogo.png";

const FrontPageNoLogin = () => {

  const reload = () => {
    window.location.reload();
  }

  const clickProfileLogo = () => {
    window.location.href = "http://localhost:3000/LogInPage/";
  }

  return (
    <div className="background-background-background">
      <div className="full-page">
        <div className="navbar">
          {/* Nav Bar */}
          <div className="logo-png">
            <img src={Clair} title="CLAIR LOGO" alt="Clair Logo PNG" id="logo" onClick={reload}/>
            <span> | C L A I R </span>
          </div>

          <div className="navbar-right-side">
            <ul>
              <li> <Link to="/LogInPage"> Home </Link></li>
              <li> <Link to="/LogInPage"> Cart </Link></li>
              <li> <Link to="/LogInPage"> <span>Log In | Sign Up</span> </Link></li>
            </ul>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-logo-png">
            <img src={Profile} title="Profile LOGO" alt="Profile Logo" id="profile-logo" onClick={clickProfileLogo}/>
          </div>
        </div>
        {/* Nav Bar */}

        <div className="body-below-nav">
          <bgVideo>
            <video autoPlay muted loop preload="auto" id="bgVideo">
              <source src={BGVideo} type="video/mp4" />
            </video>
          </bgVideo>

          <div className="search-bar">
            <input type="text" placeholder="Search for excellence" />
            <img src={Search} alt="Search" id="search" />
          </div>
        </div>  
        
        <div className = "productShowCase">
          <div className = "productFrontColumn">
            <div className = "productFrontRow">
              
            </div>

            <div className = "productFrontRow">
              
            </div>

            <div className = "productFrontRow">
              
            </div>
          </div>
        </div>



        <footer>
           <span>&copy; 2025 Clair. All Rights Reserved 2024. </span>
          <a href="https://facebook.com/AvoirJoseph"> <img src={FacebookLogo} alt="Facebook" /></a>
          <a href="https://x.com/AvoirJoseph"> <img src={XLogo} alt="X" /></a>
          <a href="https://instagram.com/AvoirJoseph"> <img src={InstagramLogo} alt="Instagram" /></a> 
          <a href="https://youtube.com/@AvoirJoseph"> <img src={YoutubeLogo} alt="YouTube" /></a>
        </footer>
      </div>
    </div>
  );
};

export default FrontPageNoLogin;
