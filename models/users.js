//step 1 . create schema for database 
const mongoose = require('mongoose') ; 


const userSchema = new mongoose.Schema({
    email : {
        type : string ,
        required : true , 
        unique : true  
    } , 
    password : {
        type : string , 
        required : true 
    },
    name : {
        type : string ,
        required : true 
    }, 
} , {
    timestamps : true 
});

const User = mongoose.model('users' , userSchema) ; 

module.exports = User ; 