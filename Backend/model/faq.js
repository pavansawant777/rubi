let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let f_schema=new Schema({
    'question':String,
    'answer':String
})
let model=mongoose.model("faqs",f_schema);
module.exports=model;