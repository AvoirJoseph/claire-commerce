import express from "express"
import mysql from "mysql"

const app = express()
const port = 8800

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password1!",
    database:"clairecommerce"
})

app.get("/", (req, res) => {
    res.json("This is the backend server.")
})

app.get("/usertable", (req, res) => {
    const query = "SELECT * FROM usertable"
    db.query(query, (err, data) => { // condition if there's an error
        if(err)
            return res.json(err) //return the error as a json thing
        return res.json(data)
    })
})

app.listen(port, () => {
    console.log("Server connected to Port: ", port)
})