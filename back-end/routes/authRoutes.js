const express=require('express')
const { singup, singin, currentUser } = require('../controllers/authController')
const { registerrules, validatorResult, loginrules } = require('../middlewares/bodyValidator')
const isauth = require('../middlewares/isauth')
const router=express.Router()
/**
 * @param POST /auth/singup
 * @description registre new user
 * @access public
 */
router.post('/singup',registerrules(),validatorResult, singup)

/**
 * @param POST /auth/singin
 * @description login user
 * @access public
 */
router.post('/singin',loginrules(),validatorResult, singin)


/**
 * @param GET /auth
 * @description current user
 * @access private
 */
router.get('/',isauth(),currentUser)




module.exports=router

