const User = require('../models/users') ; 

module.exports.profile = function(req , res){
    return res.end('<h1> Users Profile </h1>') ; 
}

//step 2.a render/action the sign up page
module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
        title : "Codeial | Sign Up"
    })
}

//step2.b .render/action the sign in page 
module.exports.signIn = function(req , res){
    return res.render('user_sign_in' , {
        title : "Codeial | Sign In"
    })
}

// step 3.a get the sign up data and also create a data base
module.exports.create = function(req , res){
   if(req.body.password != req.body.confirm_password){
    return res.redirect('back') ; 
   }
  
   User.findOne({email : req.body.email},function(err , user){
    if(err){console.log('error in finding user in signing up');return}

    if(!user){
        User.create(req.body , function (err , user){
            if(err){console.log('error in creating user while signing up'); return}
            console.log('successfully signed up');
            return res.redirect('/users/sign-in');
        }) ; 
    }else {
        res.redirect('back') ; 
    }

   });

}

module.exports.createSession = function(req , res){
    // todo later 
}