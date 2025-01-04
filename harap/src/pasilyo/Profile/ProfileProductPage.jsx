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

const ProfileProductPage = () => {
    return(

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
      </div>
    </div>
    );
}

export default ProfileProductPage