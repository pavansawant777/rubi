let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let proj_schema=new Schema({
    "title":String,
    "category":String,
    "rating":String,
    "client_name":String,
    "client_email":String,
    "client_mobile":String,
    "address":String,
    "date":Date,
    "images":[String,String,String,String],
    "tumbnail":String,
    "isRated":Boolean,
    "details":String,
    "showHome":Boolean
})
let model=mongoose.model("projects",proj_schema);
module.exports=model;