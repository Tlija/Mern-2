const mongoose=require('mongoose')

const { Schema} =  mongoose;
const productSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: String,
  price: { type: Number, required: true },
  category: [String],
  createdate: { type: Date, default: Date.now },
  instoke: { type: Boolean, default: true },
  qtes: { type: Number, required: true },
  image: { type: String },
});

const productModel = mongoose.model("product", productSchema);

module.exports=productModel