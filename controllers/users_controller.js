const User = require('../models/users') ; 

module.exports.profile = function(req , res){
    
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id , function(err , user){
            if(user){
                return res.render('user_profile' , {
                    title : "User Profile ",
                    user :  user 
                })

            }
            return res.redirect('/users/sign-in') ; 

        }); 
    
    }else{
        return res.redirect('/users/sign-in') ; 
    }


    // return res.render('user_profile' , {
    //     title : "Codiel | profile page"
    // }) ; 
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


// create session after log in / sign in 
module.exports.createSession = function(req , res){
    // find the user 
    User.findOne({email : req.body.email} , function(err , user){
        if(err){console.log('error in finding user id'); return}
        // handle user find 
        if(user){

             // handle password which dont match 
             if(user.password != req.body.password){
                return res.redirect('back') ; 
             }

             // handle session creation
             res.cookie('user_id' , user.id) ; 
             return res.redirect('/users/profile') ; 


        }else {
            // handle user not find 
            return res.redirect('back') ; 
        }
        
    }); 
   
}