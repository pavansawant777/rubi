let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let fb_schema=new Schema({
    "name":String,
    "email":String,
    "project":String,
    "mobile":String,
    "rating":String,
    "status":String,
    "date":Date
})
let model=mongoose.model("Feedbacks",fb_schema);
module.exports=model;