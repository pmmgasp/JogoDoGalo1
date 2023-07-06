const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
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
   
    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted")
        }
    })
} 
)

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE name = ? AND password = ?",[email,password], (err, result) => {
    if (err) {
        res.send({err: err});}
    if (result.length > 0) {
        res.send(result)
    }else {
        res.send({message: "Wrong username/password combination!"})};}        
            );
})

app.listen(3001, ()=>{
    console.log("Yey, your server is running on port 3001")
})


