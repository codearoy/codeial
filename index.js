// step 1 . entry point to the server (index.js)  and npm init  it will create package.json

// step 2 . mkdir routes controllers views models config
//          creating folder for different step

//  step3 : fire up our express server -  $ npm install epress

//  step 4.a : set up our server
const express = require('express') ; 
const cookieParser = require('cookie-parser') ; 
const app = express() ; 
const port = 8000 ; 
// step 8 . express layouts
const expressLayouts = require('express-ejs-layouts') ; 
const db = require('./config/mongoose') ;

const session = require('express-session') ; 
const passport = require('passport') ; 
const passportLocal = require('./config/passport-local-strategy') ; 


app.use(express.urlencoded()) ;  
// for cookie 
app.use(cookieParser()) ; 

// extract style and script from subpages into layouts
app.set('layout extractStyles' , true ) ; 
app.set('layout extractScripts' , true ) ; 

// step 9 . use of static file
app.use(express.static('./assets')) ; 

//step 8 . use layouts and footer and header 
app.use(expressLayouts) ; 


// use view engine to view html file
app.set('view engine' , 'ejs') ;
app.set('views','./views') ; 

app.use(session({
    name : 'codeial' , 
    // todo change the secret  before deployment in production mode
    secret : "blahsomething" , 
    saveUninitialized : false ,
    resave : false ,
    cookie : {
        maxAge : (1000 * 60 *100 )  
    }
})) ; 

app.use(passport.initialize()) ; 
app.use(passport.session()) ; 

app.use(passport.setAuthenticatedUser) ; 


// use express router  like a middle ware
app.use('/' , require('./routes'));



// set up server
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server : ${port}`) ; 
    }
   
    console.log(`Server is running on port : ${port}`) ; 
 }) ; 