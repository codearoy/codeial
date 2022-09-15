const passport = require('passport') ; 

const localStrategy = require('passport-local').Strategy ; 

const User = require('../models/users') ; 


//authentication using passport 
passport.use(new localStrategy({
        usernameField : 'email'
    },
    function(email , password , done){
    // find a user and establish the identity 
        User.findOne({email : email}, function(err , user){
            if(err){
                console.log('Error in finding user --> passport');
                return done(err) ; 
            }

            if(!user || user.password != password){
                console.log('Invalid Username/Password ');
                return done(null , false) ; 
            }

            return done(null , user ) ; 

        });
    }

)) ; 


//serializing the user to decide which key is to be kept in the cookies

passport.serializeUser(function(user , done){
    done(null , user.id) ; 
}) ; 


//deserializing the user from the key in the cookies
passport.deserializeUser(function(id , done ){
    User.findById(id , function(err , user){
        if(err){
            console.log('Error in finding User --> passport ');
            return done(err) ; 
        }

        return done(null , user) ; 

    });
});

// check if user is authenticated
passport.checkAuthentication = function(req , res , next){
    // if the user is signed in , then pass on the req to next function on the controller next ;
    if(req.isAuthenticated()){
        return next() ; 
    }
    //if the user is not signed in 
    return res.redirect('/users/sign-in') ; 
}

passport.setAuthenticatedUser = function(req , res , next){
    if(req.isAuthenticated()){
        // req.user contains the current sign in cookies we are just sending it to locals for the views 
        res.locals.user = req.user ; 
    }
    next() ; 
}


module.exports = passport ; 