import express from 'express'
import mysql from 'mysql'


const router = express.Router()


var con = mysql.createPool({
       host: "localhost",
       user: "root",
       password: "12345678!",
       database: "wastedb"
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
            
            const sqlInsert = "INSERT INTO user VALUES (0,?,?,?,?,?)"
            const insert_query = mysql.format(sqlInsert,[username, email, password, null, null])

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
          return res.status(401).json({ message: `wrong password`})
          } //end of bcrypt.compare()
        }//end of User exists i.e. results.length==0
       }) //end of connection.query()
      }) //end of db.connection()
      }) //end of app.post()

  router.post('/addListing', (req, res) => {
    const username = req.body.username
    const type = req.body.type
    const brand = req.body.brand
    const size = req.body.size
    const gender = req.body.gender
    const tags = req.body.tags
    const caption = req.body.caption
    const user_id = null;
    con.getConnection( async (err, connection) => {
      if (err) throw (err)
      const retrieveID = "SELECT user_id FROM user WHERE user.username = ?"
      const search_query =  mysql.format(sqlSearch,[username])
      
      await connection.query (search_query, async (err, result) => { 
            if (err) throw (err)
            user_id = result[0]
      });

      const sqlInsert = "INSERT INTO post VALUES (?,0,?,?,?,?,?,?,?)"
      const insert_query = mysql.format(sqlInsert,[user_id, type, brand, size, gender, tags, caption])

      await connection.query (insert_query, async (err, result) => { 
        if (err) throw (err)
        console.log("---------> Success")
      });


    })

  });



  router.post('/removeListing', (req, res) => {

    const type = req.body.type
    const brand = req.body.brand
    const size = req.body.size
    const gender = req.body.gender
    const tags = req.body.tags
    const caption = req.body.caption

    // find the post id associated with the user

  const deletequery = "DELETE FROM post WHERE post....."

  con.getConnection( async (err, connection) => {
  await connection.query (search_query, async (err, result) => { 
    if (err) throw (err)
    user_id = result[0]
});

  
  });
}
  );

  router.post('/updateProfile', (req, res) => {
    const username = req.body.username
    const height = req.body.height
    const weight = req.body.weight

    con.getConnection(async (err, connection) => {
        const update_query = "UPDATE user SET username = ?, height = ?, weight = ?"
        const filled_update_query = mysql.format(update_query,[username,height,weight])
        await connection.query(filled_update_query, async (err, result) => {
          if (err) throw (err)
          return res.status(200).json({message: 'Successful Update!'})
        })      
    })
  })

export default router