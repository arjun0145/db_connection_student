import mongoose from "mongoose";

 const customerSchema = new mongoose.Schema({
    cusId : {type:Number, required:true , unique:true },
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true}

 })


 export const Customer  = mongoose.model('customer_detail',customerSchema); 