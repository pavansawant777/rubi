let mongoose=require('mongoose');
let cat_sc=new mongoose.Schema({
"category":String,
"blog_count":String

})
module.exports=mongoose.model("Blog_cat",cat_sc);
