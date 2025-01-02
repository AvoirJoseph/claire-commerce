import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"

    const AddUser = () => {
        const[userTable, setUserTable] = useState({
            userName: "",
            password: "",
            image: "",

        });

        const navigate = useNavigate()
        
        const handleClick = async e => {
            e.preventDefault()
            try{
                await axios.post("http://localhost:8800/usertable", userTable)
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
            <h1>Add New User</h1> 
            <input type="text" placeholder="New User Name" onChange={handleChange} name="userName" /> 
            <input type="password" placeholder="New Password" name="password" onChange={handleChange} /> 
            {/* Add input validation or password strength and re-enter password mech */} 
            <input type="text" placeholder="Image" name="image" onChange={handleChange} /> <button onClick={handleClick}>Add</button> </div>
        )
    }

export default AddUser