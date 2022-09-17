
const express = require('express');
const router = express.Router()
var mysql = require('mysql');

var con = mysql.createPool({
       host: "localhost",
       user: "root",
       password: "12345678!",
       database: "sys"
     });
     
    //  con.connect(function(err) {
    //    if (err) throw err;
    //    console.log("Connected!");
    //  });


router.post('/signup', (req, res, next) => {
       const username = req.body.username
       const password = req.body.password
       const email = req.body.email
       
      con.getConnection( async (err, connection) => {
            if (err) throw (err)
            const sqlSearch = "SELECT * FROM user WHERE user.username = ?"
            const search_query = mysql.format(sqlSearch,[username])      
            
            const sqlInsert = "INSERT INTO user VALUES (0,?,?,?)"
            const insert_query = mysql.format(sqlInsert,[username, email, password])

      await connection.query (search_query, async (err, result) => {
        if (err) throw (err)
        console.log("------> Search Results")
        console.log(result.length)
        if (result.length != 0) {
         connection.release()
         console.log("------> User already exists")
         res.sendStatus(409) 
        } 
        else {
         await connection.query (insert_query, (err, result)=> {
         connection.release()
         if (err) throw (err)
         console.log ("--------> Created new User")
         console.log(result.insertId)
         res.sendStatus(201)
        })
       }}
    );
      });
    });   
  
router.post("/login", (req, res)=> {
      const username = req.body.username
      const password = req.body.password
      con.getConnection ( async (err, connection)=> {
       if (err) throw (err)
       const sqlSearch = "Select * from user where user.username = ?"
       const search_query = mysql.format(sqlSearch,[user])
       await connection.query (search_query, async (err, result) => {
        connection.release()
        
        if (err) throw (err)
        if (result.length == 0) {
         console.log("--------> User does not exist")
         res.sendStatus(404)
        } 
        else {
           const resultPassword = result[0].password
           //get the hashedPassword from result
          if (resultPassword == password) {
          console.log("---------> Login Successful")
          res.send(`${user} is logged in!`)
          } 
          else {
          console.log("---------> Password Incorrect")
          res.send("Password incorrect!")
          } //end of bcrypt.compare()
        }//end of User exists i.e. results.length==0
       }) //end of connection.query()
      }) //end of db.connection()
      }) //end of app.post()

module.exports = router;