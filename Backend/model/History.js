let mongoose =require('mongoose')
let Schema=mongoose.Schema;

let his_s=new Schema({
    "founding":String,
    "expansion":String,
    "vision":String,
    "mission":String
});
let model=mongoose.model("history",his_s);
module.exports=model;
