
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
         res.sendStatus(409).json({ message: 'user already exists'})
        } 
        else {
         await connection.query (insert_query, (err, result)=> {
         connection.release()
         if (err) throw (err)
         console.log ("--------> Created new User")
         console.log(result.insertId)
         return res.status(200).json({ message: 'here is your resource' });
        })
       }}
    );
      });
    });   
  
router.post("/login", (req, res)=> {
      const email = req.body.email
      const password = req.body.password
      con.getConnection ( async (err, connection)=> {
       if (err) throw (err)
       const sqlSearch = "Select * from user where user.email = ?"
       const search_query = mysql.format(sqlSearch,[email])
       await connection.query (search_query, async (err, result) => {
        connection.release()
        
        if (err) throw (err)
        if (result.length == 0) {
         console.log("--------> User does not exist")
         return res.status(200).json({message: "--------> User does not exist"})
        } 
        else {
           const resultPassword = result[0].password
          if (resultPassword == password) {
          console.log("---------> Login Successful")
          return res.status(200).json({ message: `${email} is logged in!`})
          } 
          else {
          console.log("---------> Password Incorrect")
          return res.status(401).json({ message: `${email} is logged in!`})
          } //end of bcrypt.compare()
        }//end of User exists i.e. results.length==0
       }) //end of connection.query()
      }) //end of db.connection()
      }) //end of app.post()

module.exports = router;