let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let ser_schema=new Schema({
"title":String,
"ico":String,
"details":String,
"atHome":Boolean
});
let model=mongoose.model("Services",ser_schema);
module.exports=model;

