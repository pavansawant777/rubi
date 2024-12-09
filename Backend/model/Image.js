let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let image_schema=new Schema({
    "title":String,
    "category":String,
    "image":String,
    "showHome":Boolean
})
let model=mongoose.model('images',image_schema);

module.exports=model;
