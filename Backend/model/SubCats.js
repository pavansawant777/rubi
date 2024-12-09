let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let subcat_schema=new Schema({
    "name":String,
    "categories":[String],
    "image":String,
    "title":String

})
let model=mongoose.model("Maincategory",subcat_schema);
module.exports=model;