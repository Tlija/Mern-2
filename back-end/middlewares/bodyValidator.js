const { body, validationResult } = require('express-validator');

const registerrules=()=>[
    body('name','name is required').notEmpty(),
    body('email','invalide email').isEmail(),
    body('password','password must be between 5,20').isLength({ min: 5 ,max:20}),
]
const loginrules=()=>[
    body('email','invalide email').isEmail(),
    body('password','password must be between 5,20').isLength({ min: 5 ,max:20}),
]

const costumeerror=(errors)=>errors.map((el)=>({
    msg:el.msg
}))
const validatorResult=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json( {errors:costumeerror(errors.array() )});
    }else{
        return next()
    }

}
module.exports={registerrules,loginrules,validatorResult}