exports.isadmin=(req,res,next)=>{
  const {user}=req
if (user.role!='admin'){
    return res.status(400).send({msg:'you are not admin'})
}
  next()
}