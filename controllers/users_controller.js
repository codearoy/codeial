module.exports.profile = function(req , res){
    return res.end('<h1> Users Profile </h1>') ; 
}

//step 2.a render/action the sign up page
module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
        title : "Codeial | Sign Up"
    })
}

//step2.b .  render/action the sign in page 
module.exports.signIn = function(req , res){
    return res.render('user_sign_in' , {
        title : "Codeial | Sign In"
    })
}

// step 3.a get the sign up data 
module.exports.create = function(req , res){
    //TODO later
    return res.end('working fine') ; 
}

module.exports.createSession = function(req , res){
    // todo later 
}