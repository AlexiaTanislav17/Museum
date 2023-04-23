const mysql = require('mysql2/promise')

async function connection(){
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "parola",
      database: "museum"
    })
  }

module.exports = {
    connection,
}