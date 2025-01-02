import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom"

    const UpdateUser = () => {
        const[userTable, setUserTable] = useState({
            userName: "",
            password: "",
            image: "",

        });

        const navigate = useNavigate()
        const location = useLocation()
        const userID = location.pathname.split("/")[2]

        const handleClick = async e => {
            e.preventDefault()
            try{
                await axios.put(`http://localhost:8800/usertable/${userID}`, userTable)
                navigate("/")
            }catch(err){
                alert(err)
            }
            
        }

        const handleChange = (e) => { // three dots if auto update
            setUserTable((prev) => ({...prev, [e.target.name]: e.target.value}))
        };

        console.log(userTable)

        return(
            <div className="form"> 
            <h1>Update User `{userID}`</h1> 
            <input type="text" placeholder="New User Name" onChange={handleChange} name="userName" /> 
            <input type="password" placeholder="New Password" name="password" onChange={handleChange} /> 
            {/* Add input validation or password strength and re-enter password mech */} 
            <input type="text" placeholder="Image" name="image" onChange={handleChange} /> 
            
            <button onClick={handleClick}>Update</button> 
            
            </div>
        )
    }

export default UpdateUser