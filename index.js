const express = require('express') ; 
const app = express() ; 
const port = 8000 ; 

// use express router  like a middle ware
app.use('/' , require('./routes'));

// use view engine to view html file
app.set('view engine' , 'ejs') ;
app.set('views','./views') ; 



app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server : ${port}`) ; 
    }
   
    console.log(`Server is running on port : ${port}`) ; 
 }) ; 