let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let enq_schema=new Schema({
    'name':String,
    'contactNumber':String,
    'workType':String,
    'address':String,
    'status':String,
    'date':Date
})

let model=mongoose.model('Enquiry',enq_schema);
module.exports=model;
