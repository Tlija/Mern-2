const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
require('dotenv').config({path:'./config/.env'})
const port = process.env.PORT || 5000;
const {connectdb}=require('./config/connectdb')
app.use('/auth',require('./routes/authRoutes'))
app.use('/product',require('./routes/productRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${port}`)
);
connectdb()
