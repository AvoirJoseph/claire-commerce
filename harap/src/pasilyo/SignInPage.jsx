import React from "react"
import './AnotherCSS.css'
import { Link } from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"

import Clair from "./Images/CLAIR-Logo.png"
import Profile from "./Images/Profile.png"
import FacebookLogo from "./Images/FacebookLogo.png"
import XLogo from "./Images/XLogo.png"
import InstagramLogo from "./Images/InstagramLogo.png"
import YoutubeLogo from "./Images/YoutubeLogo.png"
import BGVideo from "./Images/BG-Video.mp4"

const SignInPage = () => {

    const[userTable, setUserTable] = useState({
        userName: "",
        password: "",
    
    });

    const reload = () => {
    window.location.reload();
    }

  const clickProfileLogo = () => {
    window.location.href = "http://localhost:3000/SignInPage/?";
  }

    const navigate = useNavigate()
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/usertable", userTable)
            navigate(`/frontpage`)
            // navigate(`/userprofile/${userTable.userName}`)
            } catch(err){
            alert(err)
            }
        }

    const HandleChange = (e) => { // three dots if auto update
        setUserTable((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    return (
        <div className = "background-background-background"> {/* Just Black */}
            <div className = "full-page">
                <div className = "navbar">

                    {/* Nav Bar */}
                    <div className = "logo-png">
                        <img src={Clair} title = "CLAIR LOGO" alt= "Clair Logo PNG" id = "logo" onClick={reload}></img>
                        <span> | C L A I R </span>
                    </div>

                    <div className = "navbar-right-side">
                        <ul>
                            <li> <Link to = "/LogInPage"> Log In </Link></li>
                            <li> <Link to = "/LogInPage"> Cart </Link></li>
                            <li> <Link to = "/LogInPage"> <span>Log In | Sign Up</span> </Link></li>
                        </ul>
                    </div>

                    {/* Profile Dropdown */}
                    <div className= "profile-logo-png">
                        <img src={Profile} title= "Profile LOGO" alt= "Profile Logo" id= "profile-logo" onClick={clickProfileLogo}>
                        </img>
                    </div>

                </div> {/* Nav Bar */}

                <div className= "body-below-nav">
                    <video autoPlay muted loop preload= "auto" id= "bgVideo">
                        <source src={BGVideo} type= "video/mp4" />
                    </video>

                    <div className = "loginsignup-form">
            
                        <h1> Sign-In </h1>

                        <input type = "text" placeholder = "Enter your username" onChange = {HandleChange} name = "userName"/>
                        <input type = "password" placeholder = "Enter your password" onChange = {HandleChange} name = "password"/>
                
                        <button onClick = {handleClick} id = "signinbutton"> Sign In  </button>
                    <div/>
                </div>

            </div>

            <footer> &copy; 2025 Clair. All Rights Reserved 2024.  
                <a href = "facebook.com/AvoirJoseph"> <img src = {FacebookLogo}/></a>
                <a href = "x.com/AvoirJoseph"> <img src = {XLogo}/></a>
                <a href = "instagram.com/AvoirJoseph"> <img src = {InstagramLogo}/></a> 
                <a href = "youtube.com/@AvoirJoseph"> <img src = {YoutubeLogo}/></a>
            </footer>
        </div> 
        
    </div>   
  )
}

export default SignInPage;
