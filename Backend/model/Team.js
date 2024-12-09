let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let Team_Schema=new Schema({
    'name':String,
    'designation':String,
    'image':String,
    'instagram':String,
    'facebook':String,
    'whatsapp':String,
    'show':Boolean
})

let model=mongoose.model('Team',Team_Schema);
module.exports=model;