

import React, { useState, useEffect } from "react";
import './AnotherCSS.css';
import { Link } from "react-router-dom";
import axios from "axios";

import Clair from "./Images/CLAIR-Logo.png";
import Profile from "./Images/Profile.png";
import Search from "./Images/Search Logo.png";
import BGVideo from "./Images/large.mp4"; // bawal 2gb and up sayang

import FacebookLogo from "./Images/FacebookLogo.png";
import XLogo from "./Images/XLogo.png";
import InstagramLogo from "./Images/InstagramLogo.png";
import YoutubeLogo from "./Images/YoutubeLogo.png";

const UserTable = () => {

    const [UserTable, setUserTable] = useState([])

    useEffect(() => {
        const fetchAllUser = async() => {
            try{
                const res = await axios.get("http://localhost:8800/usertable")
                setUserTable(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllUser()

    },[])

    const handleDelete = async(userID) => {
        try{
            await axios.delete("http://localhost:8800/usertable/" + userID)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }

    const handleUpdate = async(userID) => {
        try{
            await axios.put("http://localhost:8800/usertable/" + userID)
            
        } catch(err){
            console.log(err)
        }
    }

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
                                <img src={Clair} title="CLAIR LOGO" alt="Clair Logo PNG" id="logo" onClick={reload} />
                                <span> | C L A I R </span>
                            </div>
    
                        <div className="navbar-right-side">
                            <ul>
                                <li> <Link to="/AdminViewFrontPage"> Home </Link></li>
                                <li> <Link to="/FrontPage"> Client View </Link></li>
                                <li> <Link to = "/FrontPageNoLogIn"> Log Out </Link></li>
                            </ul>
                        </div>
                
                    {/* Profile Dropdown */}
                            <div className="profile-logo-png">
                                <img src={Profile} title="Profile LOGO" alt="Profile Logo" id="profile-logo" onClick={clickProfileLogo} />
                            </div>
                        </div>
                    {/* Nav Bar */}
    
                    <div className = "body-below-nav">

                        <video autoPlay muted loop preload = "auto" id = "bgVideo">
                            <source src = {BGVideo} type = "video/mp4" />
                        </video>
                        <div className = "search-bar">
                            <input type = "text" placeholder = "Search for excellence" />
                            <img src = {Search} alt = "Search" id = "search"  onClick={clickProfileLogo} />
                        </div> 
                 </div>

                 <div className ="productShowCase">
          
                <h1> User | Vendors </h1>
                
                <button>
                    <Link to = "/AddUser"> Add New User </Link>
                </button>

                <div className ="productFrontColumn">

                    {UserTable.map((userTable) => (
                        <div key = {UserTable.userID} className = "productFrontRow">
                        <img src={`http://localhost:8800/images/${userTable.image}`} alt = {userTable.UserName}/>
                            <h2> {userTable.userName} </h2>

                            <p>Account created at {userTable.createdAt}</p>
                        
                        <button className = 'delete' onClick = {() => handleDelete(userTable.userID)}> Delete </button>
                        <button className = 'update' > <Link to = {`/UpdateUser/${userTable.userID}`}> Update </Link> </button>
                    </div>
                    ))}
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
    )
    
}

export default UserTable