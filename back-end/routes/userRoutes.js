const express=require('express')
const { getallusers, getuser } = require('../controllers/userController')
const { isadmin } = require('../middlewares/isadmin')
const isauth = require('../middlewares/isauth')
const { isauthorized } = require('../middlewares/isauthorized')
const router=express.Router()



/**
 * @params GET /user/ 
 * @description get list of all users
 * @access protected(authentified+admin)
 */
router.get('/',isauth(),isadmin,getallusers)


/**
 * @params GET /user/:iduser 
 * @description get user details
 * @access protected(authorized+admin)
 */
router.get('/:iduser',isauth(),isauthorized,getuser)




module.exports=router