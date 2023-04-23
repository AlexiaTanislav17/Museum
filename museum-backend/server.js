const express = require('express') // include 
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const views = require("./views.js")
const db = require('./database.js')
const fs = require('fs/promises')
const { check } = require('express-validator')
const cors = require('cors')

const app = express()
const port = 8001

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/paintings', async (req, res) => {
    connection = await db.connection();
    let [results, fields] = await connection.execute("SELECT title, year, image, Artists.name FROM Paintings JOIN Artists ON artist = Artists.id;")
    connection.end()
    res.send(results);
})

app.listen(port, () => {
    console.log(`Museum app listening on port ${port}`)
})