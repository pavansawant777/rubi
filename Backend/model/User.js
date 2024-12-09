let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let user_schema=new Schema({
    'username':String,
    'pass':String
})
let model=mongoose.model('User',user_schema);
module.exports=model;