const express = require('express');
const app = express()
const{Client} = require('pg');
const cors = require('cors');
const fs = require('fs');
app.use(cors({ origin: '*' }));
const PORT = 8080;

const client = new Client({
    connectionString:"postgresql://postgres:docker@localhost:5432/danduser"
});

client.connect();

app.use(cors());

app.use(express.json());



app.get('/', (req, res) => {
    client.query('SELECT * FROM authuser;').then((result) => {
     res.setHeader('Content-Type', 'application/json');
        console.log(result.rows)
        res.send(result.rows);  
     })
 })

 app.post('/', (req, res) => {
    let user = req.body
        console.log("req", req)
        client.query(`INSERT INTO Authuser(username, userid) VALUES ($1,$2);`, [user.username, user.userid]) 
        .then((result) => {
            console.log("result", result)
            res.status(200, "push working");
            res.send("Added");
         })
         .catch((err) => {
            res.send(err)
            console.log("error", err)
         })
})

app.listen(PORT, () =>{
    console.log('Listening on port: ', PORT)
})