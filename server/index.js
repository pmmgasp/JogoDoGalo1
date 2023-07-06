const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true}));
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'jogodogalo'
});


app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, hash],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted")
        }
    })
} 
)})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE email = ?;",email, (err, result) => {
    if (err) {
        res.send({err: err});}
    if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
            if (response){
                res.send(result)
            } else {
                res.send({message: "Wrong username/password combination!"})

            }
        })
    }else {
        res.send({message: "User doesn't exist" })};}        
            );
})

app.listen(3001, ()=>{
    console.log("Yey, your server is running on port 3001")
})


