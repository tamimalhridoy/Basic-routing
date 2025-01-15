const express = require('express');
const Userlist = require("./Userlist");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/Public"));

app.get("/", (req, res) =>{
res.send('whatsup man')
});

app.get("/", () =>{
res.send("All Right");
})

app.get("/Userlist",(req, res) =>{
res.send(Userlist);
});


app.get("/", () =>{
    
})

app.post("/login", (req, res) =>{
    const{name, email, password} = req.body
 
    console.log(name,email)
})

app.listen(5000, () =>{
console.log("Server is running")
})