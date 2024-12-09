let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let Certificate_schema=new Schema({
    "image":String,
    "title":String,
    "visible":Boolean
})
let model=mongoose.model("Certification",Certificate_schema);
module.exports=model;