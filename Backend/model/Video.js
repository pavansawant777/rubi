let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let video_schema=new Schema({
    'video':String,
    'showAbout':Boolean
})
let model=mongoose.model("Video",video_schema);
module.exports=model;