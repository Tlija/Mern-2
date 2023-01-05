const express=require('express')
const { addProd,getAllProds,getOneProduct,deleteOneProduct,updateOneProduct } = require('../controllers/productController')
const { filterProduct } = require('../middlewares/filterProducts')
const { isadmin } = require('../middlewares/isadmin')
const isauth = require('../middlewares/isauth')
const upload = require('../utils/multer')
const router=express.Router()
//addProduct
/**
 * @method POST /product/add
 * @description add new product
 * @acces protected(admin)
 */
router.post('/add',isauth(),isadmin,upload('products').single('file'),addProd)

//getProduct
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
router.get('/',filterProduct,getAllProds)

//getOneProduct
/**
 * @method GET /product/:id
 * @description get one product
 * @acces public
 */
router.get('/:id',getOneProduct)

//deleteOneProduct
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces protected
 */
router.delete('/:id',isauth(),isadmin,deleteOneProduct)

//updateOneProduct
/**
 * @method PUT /product/:id
 * @description update one product
 * @acces prorected
 */
router.put('/:id',isauth,isadmin,upload('products').single('file'),updateOneProduct)
module.exports=router