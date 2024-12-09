let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let Blog_schema=new Schema({
    "title":String,
    "details":String,
    "category":String,
    "date":Date,
    "time":String,
    "image":String,
    "showHome":Boolean,
    "writer":String
})

let model=mongoose.model("Blogs",Blog_schema);
module.exports=model;