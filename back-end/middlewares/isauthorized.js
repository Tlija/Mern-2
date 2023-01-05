exports.isauthorized=(req,res,next)=>{
const{iduser}=req.params
// console.log(iduser)
const{user}=req
// console.log(user._id)

if (iduser!=user._id && user.role!='admin') {
    return res.status(400).send({msg:'you are not authorized'})
}
next()
}