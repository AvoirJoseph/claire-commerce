import React, { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

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
    
    return (
        <div>
            <h1> User Table </h1>
            <div className = 'userTables'>
                {UserTable.map((UserTable) => (
                    <div className = 'userTable' key = {UserTable.userID} >
                    {UserTable.image && <img src = {UserTable.image} alt-text = ""/>}
                    <h2> {UserTable.userName} </h2>
                    <p>Created at {UserTable.createdAt}</p>

                    <button className = 'delete' onClick = {() => handleDelete(UserTable.userID)}> Delete </button>
                    <button className = 'update' ><Link to = {`/UpdateUser/${UserTable.userID}`}> Update </Link> </button>
                    </div>
            ))}
        </div>

        <button>
            <Link to = "/AddUser"> Add New User </Link>
        </button>
        </div>
    )
    
}

export default UserTable