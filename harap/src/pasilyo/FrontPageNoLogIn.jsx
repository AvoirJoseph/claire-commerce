import React from "react"
import './AnotherCSS.css'
import {Link} from "react-router-dom"

import Clair from "./Images/CLAIR-Logo.png"
import Profile from "./Images/Profile.png"
import Search from "./Images/Search Logo.png"

const FrontPageNoLogin = () => {
    
    {/* onClick reload */}
    const reload = () => {
        window.location.reload()
    }

    const clickProfileLogo = () => {
        window.location.href="http://localhost:3000/LogInPage/"
    }

    return(
        <div className = "background-background-background"> {/* Just Black */}

               <div className = "navbar"> 
                    
                {/* Nav Bar*/}
                <div className = "logo-png">
                    <img src={Clair} title = "CLAIR LOGO" 
                    id = "logo"
                    onClick= {reload}>
                    </img>

                    <span> | <span></span>C L A I R </span> 
                        
                </div>

                <div className = "navbar-right-side">
                    <ul>
                        <li> <Link to = "/LogInPage"> Home </Link></li>
                        <li> <Link to = "/LogInPage"> Cart </Link></li>
                        <li> <Link to = "/LogInPage"> <span>Log In | Sign Up</span> </Link></li>
                    </ul>
                </div>

                {/* Profile Dropdown*/}
                <div className = "profile-logo-png">
                    <img src={Profile} title = "CLAIR LOGO" 
                    id = "profile-logo"
                    onClick= {clickProfileLogo}>
                    </img>
                </div>

            </div> {/* Nav Bar */}
                <div className = "background-video">
                    <div className = "search-bar">
                        <input type="text" placeholder="Search excellence." />
                        <img src={Search} alt="Search" id = "search"/>
                        
                    </div>
            </div>

        </div>
    )
}

export default FrontPageNoLogin