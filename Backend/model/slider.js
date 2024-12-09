let mongoose=require('mongoose')
let Schema=mongoose.Schema;
let slider_schema=new Schema({
    "image":String,
    "title":String,
    
})
let model=mongoose.model("sliders",slider_schema);
module.exports=model;