const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type:String,trim:true},
    email:{type:String,trim:true,lowercase:true},
    password:{type:String},
    image:{type:String},
    created_at:{type:Date,default:Date.now()},
    address:String,
    role:{type:String,enum:['admin','client','saler'],default:'client'}



 });
 module.exports=usermodel=mongoose.model('user',userSchema)