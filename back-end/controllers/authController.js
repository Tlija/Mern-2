const usermodel   = require("../models/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.singup=async(req,res)=>{
    try {
        const {email,password}=req.body
        //check if user exists
        const existUser=await usermodel.findOne({email})
        if (existUser) {
            return res.status(400).send({msg:'user already exists'})
        }
        const user=new usermodel({...req.body})
        const hashedPass= await bcrypt.hash(password,10)
        user.password=hashedPass
        await user.save()

        res.send({msg:'user successufully registred'})

    } catch (error) {
        res.status(400).send({msg:error.message})
    }

}
exports.singin=async(req,res)=>{
    try {
        const {email,password}=req.body
        //check if user exists
        const existUser=await usermodel.findOne({email})
        if (!existUser) {
            return res.status(400).send({msg:'bad credentiel(email)'})
        }
                //check if password exists
                const match=await bcrypt.compare(password,existUser.password)
            if (!match){
                return res.status(400).send({msg:'bad credentiel(password)'})
            }
            const payload={userid:existUser._id}
            const token=await jwt.sign(payload, process.env.PRIVATE_KEY,{expiresIn:'1h'});
             existUser.password=undefined
            res.send({user:existUser,token:token})
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
}
exports.currentUser=(req,res)=>{
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
}