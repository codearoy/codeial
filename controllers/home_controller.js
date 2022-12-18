const Post = require('../models/post') ; 
const User = require('../models/users') ; 

module.exports.home = function(req , res){
  // console.log(req.cookies);
  // res.cookie('user_id' , 25);

  // Post.find({} ,function(err , posts){
  //     return res.render('home' , {
  //       title : 'Codiel | home ' ,
  //       posts : posts 
  //   }); 
  // });

    // populate the user of each post . 
  Post.find({})
  .populate('user')
  .populate({
    path : 'comments' , 
    populate : {
    path : 'user'
    }
  })
  .exec(function(err , posts){

       User.find({}, function(err , users){
        return res.render('home' , {
          title : 'Codiel | home ' ,
          posts : posts , 
          all_users : users 
       });     
       })
         
  }) ; 

  //  return res.end('<h1> Express is up for codeial ! </h1>') ; 
}

// module.exports.actionName = function(req , res){
//    return res.end() ; 
 //}

 