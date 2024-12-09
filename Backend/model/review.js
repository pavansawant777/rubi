let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let r_schema=new Schema({
    'name':String,
    'details':String,
    'stars':String,
    'image':String
})
let model=mongoose.model("reviews",r_schema);
module.exports=model;