let express=require('express');
let route=express.Router();
let company=require('../model/ComapnyInfo');
let service=require('../model/Services');
let project=require('../model/Project');
let slider=require("../model/slider");
let mailer=require('../Middleware/Mail');
let fb=require('../model/Feedbacks');
let cat=require('../model/Categories')
let blog=require('../model/Blog');
let vdo=require('../model/Video');
let photo=require('../model/Image');
let Team=require('../model/Team');
let Enq=require('../model/Enq');
let maincat=require('../model/SubCats');
let faq=require('../model/faq');
let testi=require('../model/review');
const main = require('../Middleware/Mail');
let certi=require('../model/Certificates');
let his=require('../model/History');
route.get("/",(req,res)=>{
    res.send('hello');
})
route.get('/get-company-info',async(req,res)=>{
    
let d=await company.findById('6719ca14f1b7799ac888f942');
if(d.length!=0){
    res.send(d);
}
})
route.get('/get-faqs',async(req,res)=>{
    let d=await faq.find();
    res.send(d);
})
route.get('/get-services',async(req,res)=>{
    
    let d=await service.find();
    if(d.length!=0){
        res.send(d);
    }
    })
    route.get("/get-projects",async(req,res)=>{
        let d=await project.find().sort({"_id":-1});
        if(d.length!=0){
            res.send(d);
        }
    })
      route.get("/get-projects-home",async(req,res)=>{
        let d=await project.find({showHome:true});
        if(d.length!=0){
            res.send(d);
        }
    })
    route.get("/view-project/:id",async (req,res)=>{
  let proj=await project.findById(req.params.id);
 
    

  res.send(proj);
 })
 route.post("/feedback-req",async(req,res)=>{
    let otp=Math.floor(10000*Math.random());
    let count=0;
    for(let i=otp;i!=0;i=Math.floor(i/10)){
      count++;
    }
    if(count<4){
        otp=otp*10;
    }
    
    mailer(req.body.email,'Your feedback otp',`Your feedback otp is ${otp}`);
    res.send(otp+"");
 })
 route.post('/save-feedbacks',async(req,res)=>{
  req.body.status='pending';
  req.body.date=new Date().toISOString().slice(0,10);
    let d=await fb(req.body).save();
    if(d.length!=0){
        let m=await project.findById(req.body.project).updateOne({"isRated":true});
        res.send(true);
    }
 })
 route.get('/blog-list',async(req,res)=>{
    let d=await blog.find().sort({"_id":-1});
    console.log(d);
    if(d.length!=0){
        res.send(d);
    }
 })
 route.get('/other-blog-list',async(req,res)=>{
    let d=await blog.find().sort({"_id":-1}).skip(0).limit(6);
    console.log(d);
    if(d.length!=0){
        res.send(d);
    }
 })
 route.get('/blog-list/:cata',async(req,res)=>{
    let d=await blog.find({category:req.params.cata});
    if(d.length!=0){
        res.send(d);
    }
 })
 route.get('/blog/:id',async(req,res)=>{
    let d=await blog.findById(req.params.id);
    if(d.length!=0){
        res.send(d);
    }
 })
route.get('/categories',async(req,res)=>{
    let d=await cat.find();
    if(d.length!=0){
        d.unshift({'_id':'12345','category':'All'});
        res.send(d);
    }
})
route.get('/project-list/:cata',async(req,res)=>{
    let d=await project.find({'category':req.params.cata});
    if(d.length!=0){
        res.send(d);
    }
})
route.get('/home-images',async(req,res)=>{
let d=await photo.find({showHome:true});
res.send(d);
})
route.get('/get-images',async(req,res)=>{
    let d=await photo.find();
    res.send(d);
})
route.get('/get-images/:cat',async(req,res)=>{
    let cats=await cat.findOne({category:req.params.cat});
    let d=await photo.find({category:cats._id});
    res.send(d);
})
route.get('/get-videos',async(req,res)=>{
    let d=await vdo.find({showAbout:true});
    res.send(d);
})
route.get('/team-members',async(req,res)=>{
    let d=await Team.find();
    res.send(d); 
})
route.get('/enq-list',async(req,res)=>{
    let d=await Enq.find();
    res.send(d);
})
route.post('/enquiry',async(req,res)=>{
    req.body.date=new Date().toString();
    req.body.status='pending';
    let d=await Enq(req.body).save();
    if(d.length!=0){
return true;
    }
    
})
route.get('/get-reviews',async(req,res)=>{
    let d=await testi.find();
    res.send(d);
})
route.get('/get-cats',async(req,res)=>{
    let d=await cat.find();
      res.send(d);
})
route.get('/get-main-cats',async(req,res)=>{
    let d=await maincat.find();
    res.send(d);
})
route.get("/get-sub-cats/:id",async(req,res)=>{
    let cats=[];
    let d=await maincat.findById(req.params.id);
    for(let i of d.categories){
        let c=await cat.findById(i);
        cats.push(c);
    }
    res.send(cats);
})
route.get("/get-certificates",async(req,res)=>{
    let d=await certi.find({visible:true});
    res.send(d);
})
route.get("/sim-cat-proj/:cat",async(req,res)=>{
    let proj=await project.findById(req.params.cat);

    let d=await project.find({category:proj.category}).skip(0).limit(6);
    res.send(d);
})
route.get("/get-other-proj",async(req,res)=>{

    let d=await project.find().skip(0).limit(6);
    res.send(d);
})
route.get("/get-slider",async(req,res)=>{
    let d=await slider.find().sort({"_id":-1});
    res.send(d);
})
route.get("/get-history",async(req,res)=>{
    let d=await his.find();
    res.send(d[0]);
})
let blogcat=require("../model/blogcat");
route.get("/blog-cats",async(req,res)=>{
    let d=await blogcat.find();
    res.send(d);
})

module.exports=route;