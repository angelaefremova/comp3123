const express = require("express")

const app = express()
const SERVER_PORT = 3000;

app.use(express.static("./statics"))

app.get("/", (req, res) => {
    res.send("<h1>Week 4 Lab - Angela Efremova 101311327</h1>");
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
})

//http://localhost:3000/user?firstname=Angela&lastname=Efremova
app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))
})

//http://localhost:3000/user/Angela/Efremova
app.post("/user/:firstname/:lastname", (req, res) =>{
    const u = req.params

    var firstname = u.firstname
    var lastname = u.lastname

    res.send(JSON.stringify(req.params))
})

app.listen(SERVER_PORT,() => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}`);
})

