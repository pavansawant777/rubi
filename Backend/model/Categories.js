let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let cat_schema=new Schema({
    "category":String,
    "proj_count":String,
    "image":String,
    "blog_count":String
})
let model=mongoose.model("category",cat_schema);
module.exports=model;