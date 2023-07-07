const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bcrypt = require("bcrypt")
const saltRounds = 10;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    key: "userId",
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 60 * 24,
        sameSite: "none",
    },
}))
    

//Criar conexão com a database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'jogodogalo'
});

//Registar utilizador na base de dados
app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
    db.query("SELECT * FROM users WHERE name = ?;", name, (err, result) => {
        if (err) {
            console.log(err)
        }
            if (result.length > 0) {
                res.send({message1: "Esse nome de utilizador não está disponível."})
            } else {
                db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
                    if (result.length > 0) {
                            res.send({message2: "Esse email não está disponível."})
                        } else {
                            db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",[name, email, hash],(err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send({registo: true})
                        }}
                    )}
                })
            }
        })
    })
})

//Devolver dados sobre o utilizador autenticado
app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({logged: true, user: req.session.user})
    } else {
        res.send({logged: false})
    }
})

//Efetuar logout do utilizador autenticado
app.post("/logout", (req, res) => {
    res.send({ logged: false })
    req.session.destroy();
})

//Autenticar o utilizador
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE email = ?;",email, (err, result) => {
    if (err) {
        res.send({err: err});}
    if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
            if (response){
                req.session.user = result;
                console.log(req.session.user)
                res.send({logged: true, result: result})
            } else {
                res.send({logged: false, message1: "Combinação email/password incorretos!"})

            }
        })
    }else {
        res.send({logged: false, message2: "Utilizador não existe." })};}        
            );
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})


