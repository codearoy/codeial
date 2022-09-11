const express = require('express') ; 

const router = express.Router() ; 

const usersController = require('../controllers/users_controller') ; 

router.get('/profile' , usersController.profile) ; 


//step 2. created route for sign in and sign up controller
router.get('/sign-up' , usersController.signUp) ; 
router.get('/sign-in' , usersController.signIn) ;

router.post('/create' , usersController.create) ; 

module.exports = router ; 



