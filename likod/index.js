import express from "express"
import mysql from "mysql"
import cors from "cors"
import bcrypt from "bcrypt"

const port = 8800
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password1!",
    database:"clairecommerce"
})

app.use(express.json())
app.use(cors())

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

app.post("/usertable", (req, res) => {
    const query = "INSERT INTO usertable (userName, password, image) VALUES(?, ?, ?)";
    const values = [
        req.body.userName,
        req.body.password,
        req.body.image,
    ];

    db.query(query, values, (err, data) => {
        if (err) {
            return res.status(500).json(err); 
        }
        return res.status(201).json("User added successfully");
    });
});

app.delete("/usertable/:userID", (req, res) => {
    const userID = req.params.userID
    const query = "DELETE FROM usertable WHERE userID = ?"

    db.query(query,[userID], (err, data) => {
        if (err){
            return res.json(err)
        }
        return res.json("User Successfully deleted")
    })
})

app.put("/userTable/:userID", (req, res) => {
    const userID = req.params.userID
    const query = "UPDATE usertable SET `userName` = ?, `password` = ?, `image` = ? WHERE userID = ?"

    const values = [
        
        req.body.userName,
        req.body.password,
        req.body.image,
    ];

    db.query(query, [...values, userID], (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json("User Successfully Updated!")
    })
})


app.post("/login", (req, res) => {
    const {userName, password} = req.body
    const query = "SELECT * FROM usertable WHERE userName = ?"

    db.query(query, [userName], (err, data) => {
        if(err)
            return res.status(500).json(err);
        if(data.length === 0)
            return res.status(404).json("User not found")

        const user = data[0]

        bcrypt.compare(password, user.password, (err, result) =>{
            if (err)
                return res.status(500).json(err)
            if(!result)
                return res.status(401).json("Invalid Password")
            res.status(200).json({success: true, message: "Logged in successfully."})
        })
    })
})

app.listen(port, () => {
    console.log("Server connected to port", port)
})
