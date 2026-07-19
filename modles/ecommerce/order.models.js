import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref="Product"
    },
    quantity:{
        type:Number,
        requried:true
    }

},{timestepms: true})

const orderSchema = new mongoose.Schema({
    oldPrice:{
        type:Number,
        requried:true,
    },  
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItem:{
        type:  [orderItemSchema]
    },
    address:{
        type:String,
        requried:true
    },
    status:{
        type:String,
        enum:["PENDING", "CANCELLED", "DELVERED"],
        default:"PENDING",
        
    }

}, {timestepms : true})

export const Order = mongoose.model("Order", orderSchema)