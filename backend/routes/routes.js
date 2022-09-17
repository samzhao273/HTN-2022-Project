
const express = require('express');
const router = express.Router()
var mysql = require('mysql2');

var con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "12345678!"
     });
     
     con.connect(function(err) {
       if (err) throw err;
       console.log("Connected!");
     });

router.post('/signup', (req, res, next) => {
       console.log(req.body.username)
       
        con.getConnection( async (err, connection) => {
            if (err) throw (err)
            const sqlSearch = "SELECT * FROM userLogin WHERE userLogin.username = ?"
            const search_query = mysql.format(sqlSearch,[username])      
            
            const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)"
            const insert_query = mysql.format(sqlInsert,[username, password])
        }

    // await connection.query (search_query, async (err, result) => {
    //     if (err) throw (err)
    //     console.log("------> Search Results")
    //     console.log(result.length)
    //     if (result.length != 0) {
    //      connection.release()
    //      console.log("------> User already exists")
    //      res.sendStatus(409) 
    //     } 
    //     else {
    //      await connection.query (insert_query, (err, result)=> {
    //      connection.release()
    //      if (err) throw (err)
    //      console.log ("--------> Created new User")
    //      console.log(result.insertId)
    //      res.sendStatus(201)
    //     })
    //    }
    // )   
});

module.exports = router;