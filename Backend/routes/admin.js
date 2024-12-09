let express=require('express');
let route=express.Router();
let comapny_model=require(".././model/ComapnyInfo");
let ad=require('../model/User');
 let cata_model=require('.././model/Categories');
 let project_model=require('.././model/Project');
 let OurTeam_model=require('.././model/Team');
let faq=require('../model/faq');
 let Service_model=require(".././model/Services");
let testi=require('../model/review');
let Enq=require('../model/Enq');
let vdo=require('../model/Video');
let photo=require('../model/Image');
 let blog_model=require('.././model/Blog');
let feedback=require('../model/Feedbacks');
let maincat=require('../model/SubCats');
const main = require('../Middleware/Mail');
let certi=require("../model/Certificates");
let slider=require("../model/slider");
let his=require("../model/History");
route.get("/",(req,res)=>{
    let obj={
        'warn':''
    }
  res.render('admin/login.ejs',obj);
    
})
// route.get('/save-admin', async(req,res)=>{
//     let obj={
//         'username':'admin',
//         'pass':'1234'
//     }
//     let d=await ad(obj).save();
//     if(d.length!=0){
//         res.redirect('/admin/');
//     }

// })

route.post('/login-admin',async(req,res)=>{
    let d=await ad.find({username:req.body.username,pass:req.body.pass});
     if(d.length==0){
         let obj={
             'warn':'Wrong admin details'
         }
         res.render('admin/login.ejs',obj);
     }
     else{
       req.session.cust_id=d[0]._id;
     // req.session.cust_id=1;
        res.redirect('/admin/company-details');
     }
   
    
})
function checkAdmin(req,res,next){
   
if(req.session.cust_id!=undefined){
   
    next();
}
else{
    res.redirect('/admin/')
}
}
route.get('/add-faq',checkAdmin,async(req,res)=>{
    res.render('admin/addfaq.ejs');
})
route.post("/save-faq",checkAdmin,async(req,res)=>{
    let d=await faq(req.body).save();
    if(d.length!=0){
        res.redirect('/admin/faqs');
    }
})
route.get('/faqs',checkAdmin,async(req,res)=>{
    let d=await faq.find();
    let obj={
        "faq":d
    }
    res.render('admin/faqs.ejs',obj);
})
route.get('/delete-faq/:id',checkAdmin,async(req,res)=>{
    let d=await faq.findById(req.params.id).deleteOne();
    if(d.length!=0){
        res.redirect('/admin/faqs');
    }
    
})
route.get("/company-details",checkAdmin, async (req,res)=>{
 let company=await comapny_model.findById('6719ca14f1b7799ac888f942');
 let obj={
    "company":company
 }
    res.render("admin/company.ejs",obj);
})
route.post('/save-company-details',checkAdmin, async(req,res)=>{
    let d=await comapny_model.findById('6719ca14f1b7799ac888f942').updateOne(req.body);
    if(d.length!=0){
        res.redirect('/admin/company-details');

    }

})
 route.get("/add-service",(req,res)=>{
     res.render("admin/addservice.ejs");
 })
  route.post("/add_service",checkAdmin, async(req,res)=>{
  req.body.atHome=false;
     let data=await Service_model(req.body).save();
     if(data.length!=0){
         res.redirect("/admin/services-list");
     }
 })
  route.get("/services-list",checkAdmin, async(req,res)=>{
     let services=await Service_model.find();
     let obj={
         "service":services
     }
     res.render("admin/servicelist.ejs",obj);
 })
  route.get("/view-service/:id",checkAdmin, async (req,res)=>{
     let service=await Service_model.findById(req.params.id);
     let obj={
         "service":service
     }
     res.render("admin/viewservice.ejs",obj);

 })
  route.post("/update-service/:id",checkAdmin, async (req,res)=>{
    req.body.atHome=(req.body.atHome=="true")?true:false;
      let data=await Service_model.findById(req.params.id).updateOne(req.body);
    
      if(data.length!=0){
          res.redirect("/admin/services-list");
      }

 })
  route.get("/catagory",checkAdmin, async(req,res)=>{
      let cata_data=await cata_model.find();
      let obj={
          "cat":cata_data
      }
     res.render("admin/catagory.ejs",obj);
 })
  route.post("/save-catagory",checkAdmin, async(req,res)=>{
    req.body.proj_count=0;
    req.body.blog_count=0;
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv("public/images/"+req.body.image);
     let data=await cata_model(req.body).save();
     if(data.length!=0){
         res.redirect("/admin/catagory");
     }
 })
 route.post('/update-category/:id',checkAdmin, async(req,res)=>{
    let d=await cata_model.findById(req.params.id).updateOne(req.body);
    if(d.length!=0){
        res.redirect('/admin/catagory');
    }
 })
  route.get("/delete-cat/:id",checkAdmin, async(req,res)=>{
     let data=await cata_model.findById(req.params.id).deleteOne();
     if(data.length!=0){
         res.redirect("/admin/catagory");
     }
 })
  route.get("/add-project",checkAdmin, async(req,res)=>{
     let cata_data=await cata_model.find();
     let obj={
         "cats":cata_data
     }
     res.render("admin/addproject.ejs",obj);
 })
  route.post("/save-project",checkAdmin, async (req,res)=>{
    req.body.images=[];
     req.body.tumbnail=new Date().getTime()+req.files.thumb_img.name;
     req.body.tumbnail=req.body.tumbnail.toString().split(" ").join("-");
      req.files.thumb_img.mv("public/images/"+req.body.tumbnail);
 
      
 
 req.body.image1=new Date().getTime()+req.files.image1.name;
 req.body.image1=req.body.image1.toString().split(" ").join('-');
 req.files.image1.mv("public/images/"+req.body.image1);
 req.body.images.push(req.body.image1);
 req.body.image2=new Date().getTime()+req.files.image2.name;
 req.body.image2= req.body.image2.toString().split(" ").join('-');
 req.files.image2.mv("public/images/"+req.body.image2);
  req.body.images.push(req.body.image2);
 if(req.files.image3){
     req.body.image3=new Date().getTime()+req.files.image3.name;
   req.body.image3=   req.body.image3.toString().split(" ").join('-');
     req.files.image3.mv("public/images/"+req.body.image3);
      req.body.images.push(req.body.image3);
 }
 if(req.files.image4){
     req.body.image4=new Date().getTime()+req.files.image4.name;
  req.body.image4=    req.body.image4.toString().split(" ").join('-');
     req.files.image4.mv("public/images/"+req.body.image4);
      req.body.images.push(req.body.image4);
 }
 req.body.showHome=false;
 req.body.isRated=false;
req.body.rating=0;

 let data=await project_model(req.body).save();

if(data.length!=0){
   let Proj_len =await cata_model.findOne({"category":req.body.category});
   Proj_len.proj_count=Number(Proj_len.proj_count)+Number(1);
   let d=await cata_model.findById(Proj_len._id).updateOne({"proj_count":Proj_len.proj_count});
   if(d.length!=0){
      res.redirect("/admin/add-project");
   }
}
      
 

 })
  route.get("/project-list",checkAdmin, async (req,res)=>{
     let proj=await project_model.find();
     let obj={
         "proj":proj
     }
     res.render("admin/projectlist.ejs",obj);
 })
  route.get("/view-project/:id",checkAdmin, async (req,res)=>{
  let proj=await project_model.findById(req.params.id);
  let fb=await feedback.findOne({"project":req.params.id});
 
          let obj={
              "proj":proj,
              "fb":fb
           
          }

  res.render("admin/viewproject.ejs",obj);
 })
route.get("/edit-project/:id",checkAdmin, async(req,res)=>{
      let proj=await project_model.findById(req.params.id);
  let cata_data=await cata_model.find();
  let obj={
               "proj":proj,
                  "index":0,
                  "cats":cata_data
              }
    res.render('admin/editproject.ejs',obj);
})
route.post('/update-proj-tumbnail/:id',checkAdmin, async(req,res)=>{
    req.body.tumbnail=new Date().getTime()+req.files.img.name;
    req.body.tumbnail=req.body.tumbnail.toString().split(" ").join("-");
    req.files.img.mv("public/images/"+req.body.tumbnail);
    let d=await project_model.findById(req.params.id).updateOne({"tumbnail":req.body.tumbnail});
    if(d.length!=0){
        res.redirect("/admin/edit-project/"+req.params.id);
    }
})
route.post('/update-proj-img/:id/:in',checkAdmin, async(req,res)=>{
    req.body.img=new Date().getTime()+req.files.img.name;
    req.body.img=req.body.img.toString().split(" ").join("-");
    req.files.img.mv("public/images/"+req.body.img);
let imag=`images.${req.params.in}`;
    
    let d=await project_model.findById(req.params.id).updateOne({[imag]:req.body.img});
    if(d.length!=0){
        
        res.redirect("/admin/edit-project/"+req.params.id)
    }



})

 route.post("/update-project-details/:id",checkAdmin, async (req,res)=>{
    let proj_d=await project_model.findById(req.params.id);

    if(proj_d.category!=req.body.category){
        let Proj_len =await cata_model.findOne({"category":req.body.category});
   Proj_len.proj_count=Number(Proj_len.proj_count)+Number(1);
   let d=await cata_model.findById(Proj_len._id).updateOne({"proj_count":Proj_len.proj_count});

   let Proj_len_1 =await cata_model.findOne({"category":proj_d.category});
   Proj_len_1.proj_count=Number(Proj_len_1.proj_count)-Number(1);
   let e=await cata_model.findById(Proj_len_1._id).updateOne({"proj_count":Proj_len_1.proj_count});

    }
     let data=await project_model.findById(req.params.id).updateOne(req.body);
     if(data.length!=0){
         res.redirect("/admin/view-project/"+req.params.id);
     }
 })
 route.get("/delete-project/:id",checkAdmin, async(req,res)=>{
    let proj_cata=await project_model.findById(req.params.id);
let data=await project_model.findById(req.params.id).deleteOne();
let Proj_len =await cata_model.findOne({"category":proj_cata.category});
   Proj_len.proj_count=Proj_len.proj_count-1;
 
if(data.length!=0){
    let d=await cata_model.findById(Proj_len._id).updateOne({"proj_count":Proj_len.proj_count});
    if(d.length!=0){
        res.redirect('/admin/project-list');
    }
    
}    
})
route.get('/accept-feedback-req/:fid/:pid',checkAdmin, async(req,res)=>{
    let f=await feedback.findById(req.params.fid);
    let fb=await feedback.findById(req.params.fid).updateOne({"status":'accepted'});
    if(fb.length!=0){
         let proj=await project_model.findById(req.params.pid).updateOne({"rating":f.rating});
         if(proj.length!=0){
             res.redirect('/admin/view-project/'+f.project);
         }
        
    } 
})
 route.post("/add-blog",checkAdmin, async(req,res)=>{
     req.body.date=new Date().toISOString().slice(0,10);
     req.body.image=new Date().getTime()+req.files.image.name;
     req.files.image.mv("public/images/"+req.body.image);
     let prevCat=await blogcat.findOne({category:req.body.category});
     let cat=await blogcat.findOne({category:req.body.category}).updateOne({blog_count:(Number(prevCat.blog_count)+Number(1))});
     req.body.showHome=false;
     req.body.time=new Date().getTime();
     let data=blog_model(req.body).save();
     if(data.length!=0){
         res.redirect('/admin/blog-list');
     }
 })
  route.get("/write-blog",checkAdmin, async(req,res)=>{
    let categories=await blogcat.find();
    let obj={
        "cats":categories
    }
     res.render("admin/writeblog.ejs",obj);
 })
  route.get("/blog-list",checkAdmin, async(req,res)=>{
    

    let blogs=await blog_model.find();
   for(let b of blogs){
    b.passed_time=countTime(b.time);
    
   }
   
     let obj={
         "blogs":blogs
     }
  
     res.render("admin/bloglist.ejs",obj);
 })
 function countTime(intial){
    let final=new Date().getTime();
    let s=(final-intial)/1000;
    let min=s/60;
    let hr=min/60;
    let day=hr/24;
   
 
    let month=day/30;
    let year=month/12;
    if(s<60){
        return `${Math.floor(s)} sec`;
    }
    if(s>60 && min<60){
     return `${Math.floor(min)} min`;
    }
    else if(min>60 && hr<24){
        return `${Math.floor(hr)} hr`;
    }
     else if(hr>24 && day<30){
        return `${Math.floor(day)} days`;    }
     else if(day>30 && month<12){
        return `${Math.floor(month)} months`;
    }
    
     else if(month>12){
        return `${Math.floor(year)} years`;
    }
 
   }
  route.get("/view-blog/:id",checkAdmin, async(req,res)=>{

     let data=await blog_model.findById(req.params.id);
    data.time_passed=countTime(data.time);
     let obj={
         "blog":data
     }
     res.render("admin/viewblog.ejs",obj);
 })
 route.get("/edit-blog/:id",checkAdmin, async(req,res)=>{
    let data=await blog_model.findById(req.params.id);
    let cats=await cata_model.find();
    let obj={
        "blog":data,
        "cats":cats
    }
  res.render('admin/editblog.ejs',obj);
 })
 route.post("/update-blog-info/:id",checkAdmin, async(req,res)=>{
    
    let data=await blog_model.findById(req.params.id).updateOne(req.body);
    if(data.length!=0){
        res.redirect('/admin/edit-blog/'+req.params.id);
    }
    
 })
 route.post("/update-blog-img/:id",checkAdmin, async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.image.name;
    req.files.image.mv("public/images/"+req.body.image);
    let d=await blog_model.findById(req.params.id).updateOne({"image":req.body.image});
    if(d.length!=0){
        res.redirect('/admin/edit-blog/'+req.params.id);
    }


 })
  route.get("/delete-blog/:id",checkAdmin, async(req,res)=>{
    let blog=await blog_model.findById(req.params.id);
    let prevCat=await blogcat.findOne({category:blog.category});
    let cat=await blogcat.findOne({category:blog.category}).updateOne({blog_count:prevCat.blog_count-1})
     let data=await blog_model.findById(req.params.id).deleteOne();
     if(data.length!=0){
         res.redirect("/admin/blog-list");
     }
 })
 route.get('/photos',checkAdmin, async(req,res)=>{
    let cata=await cata_model.find();
    let imgs=await photo.find();
    let obj={
        "cats":cata,
        "imgs":imgs
    }
    res.render('admin/photo.ejs',obj)
 })
 route.post('/save-image',checkAdmin, async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.image.name;
    req.body.showHome=false;
    req.files.image.mv('public/images/'+req.body.image);
    let d=await photo(req.body).save();
    if(d.length!=0){
    res.redirect('/admin/photos')
    }
 })
 route.post('/update-image-name/:id',checkAdmin, async(req,res)=>{
    
     let d=await photo.findById(req.params.id).updateOne({title:req.body.title,category:req.body.category,showHome:req.body.showHome});
     if(d.length!=0){
         res.redirect('/admin/photos');
     }


 })
 route.get('/videos',checkAdmin, async(req,res)=>{
    let vd=await vdo.find();
    let obj={
        'vdo':vd
    }
    res.render('admin/videos.ejs',obj)
 })
 function youtubeShortsToIframe(shortsUrl) {
    // Regular expression to match the YouTube Shorts URL and extract the video ID
    const regex = /https:\/\/(?:www\.)?youtube\.com\/shorts\/([A-Za-z0-9_-]+)/;
    const match = shortsUrl.match(regex);

    if (match) {
        const videoId = match[1];
        // Construct the iframe embed code
        const iframeCode = `https://www.youtube.com/embed/${videoId}`;
        return iframeCode;
    } else {
        return "Invalid YouTube Shorts URL";
    }
}
 route.post('/save-video',checkAdmin, async(req,res)=>{
   req.body.video=youtubeShortsToIframe(req.body.link);
   let d=await vdo(req.body).save();
   if(d.length!=0){
    res.redirect('/admin/videos');
   }
})
route.post('/update_video_visiblity/:id',checkAdmin, async(req,res)=>{
     let d=await vdo.findById(req.params.id).updateOne({'showAbout':req.body.showAbout});
     if(d.length!=0){
         res.redirect('/admin/videos');
     }
   
})
 route.get("/add-team-member",checkAdmin, async (req,res)=>{
      let member=await OurTeam_model.find();
      let obj={
          "ttl_member":member.length
      }
     res.render("admin/addmember.ejs",obj);
 })
  route.post("/add-member",checkAdmin, async(req,res)=>{
     req.body.image=new Date().getTime()+req.files.pfp.name;
     req.files.pfp.mv("public/images/"+req.body.image);
      let data=await OurTeam_model(req.body).save();
      if(data.length!=0){
          res.redirect("/admin/team-members");
      }
   
 })
 route.get("/team-members",checkAdmin, async (req,res)=>{
    let member=await OurTeam_model.find();
    let obj={
        "member":member
    }
    res.render("admin/teammembers.ejs",obj);
})
 route.get("/view-member/:id",checkAdmin, async (req,res)=>{
     let member=await OurTeam_model.findById(req.params.id);
     let obj={
         "member":member
     }
     res.render("admin/viewmember.ejs",obj);
 })
  route.post("/update-member/:id",checkAdmin, async (req,res)=>{
     req.body.image=new Date().getTime()+req.files.pfp.name;
     req.files.pfp.mv("public/images/"+req.body.image);
     let data=await OurTeam_model.findById(req.params.id).updateOne(req.body);
    if(data.length!=0){
     res.redirect("/admin/team-members");
    }
 })
  route.get("/delete-member/:id",checkAdmin, async (req,res)=>{
     let data=await OurTeam_model.findById(req.params.id).deleteOne();
     if(data.length!=0){
         res.redirect("/admin/team-members");
     }
 })
 route.get('/enquries',checkAdmin, async(req,res)=>{
    let d=await Enq.find({status:'pending'}).sort({"_id":-1});
    let obj={
        "enqs":d,
        "status":'Pending'
    }
    res.render('admin/enquires.ejs',obj);
 })
 route.get('/view-enquiry/:id',checkAdmin, async(req,res)=>{
    let d=await Enq.findById(req.params.id);
    let obj={
        'enq':d,
        
    }
    res.render('admin/viewenq.ejs',obj);
 })
 route.get('/accept-enq/:id',checkAdmin, async(req,res)=>{
    let d=await Enq.findById(req.params.id).updateOne({status:'accepted'});
    if(d.length!=0){
        res.redirect('/admin/accepted-enquiries');
    }
 })
 route.get('/accepted-enquiries',checkAdmin, async(req,res)=>{
    let d=await Enq.find({status:'accepted'}).sort({"_id":-1});
    
    let obj={
'enqs':d,
'status':'Accepted'
    }
    res.render('admin/enquires.ejs',obj);
 })
 route.get('/delete-enq/:id',checkAdmin, async(req,res)=>{
    let d=await Enq.findById(req.params.id).deleteOne();
    if(d.length!=0){
        res.redirect('/admin/enquries');
    }
 })
route.get("/testimonial",checkAdmin,async(req,res)=>{
    let d=await testi.find();
    let obj={
        "quotes":d
    }
    res.render('admin/testimonial.ejs',obj);
})
route.post("/add-testimonial",checkAdmin,async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv("public/images/"+req.body.image);
     let d=await testi(req.body).save();
    
     if(d.length!=0){
         res.redirect('/admin/testimonial');
     }
  
})
route.get("/delete-quote/:id",checkAdmin,async(req,res)=>{
    let d=await testi.findById(req.params.id).deleteOne();
    if(d.length!=0){
        res.redirect('/admin/testimonial');
    }
})
route.post('/update-testimonial/:id',checkAdmin,async(req,res)=>{
let d=await testi.findById(req.params.id).updateOne(req.body);
if(d.length!=0){
    res.redirect('/admin/testimonial');
}
})
route.post("/update-cat-img/:id",async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv('public/images/'+req.body.image);
    let d=await cata_model.findById(req.params.id).updateOne({image:req.body.image});
    if(d.length!=0){
        res.redirect('/admin/catagory');
    }
})
route.get("/main-catagory",checkAdmin,async(req,res)=>{
    let cata_data=await cata_model.find();
    let main=await maincat.find();
    let obj={
        "cat":cata_data,
        "main":main
    }
res.render('admin/maincats.ejs',obj);
})
route.post('/save-main-catagory',async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv("public/images/"+req.body.image);
    let d=await maincat(req.body).save();
    if(d.length!=0){
        res.redirect('/admin/main-catagory')
    }

  
})
route.post("/update-main-category/:id",async(req,res)=>{
    let d=await maincat.findById(req.params.id).updateOne(req.body);
    if(d.length!=0){
        res.redirect('/admin/main-catagory');
    }
})
route.get("/delete-main-cat/:id",checkAdmin,async(req,res)=>{
    let d=await maincat.findById(req.params.id).deleteOne();
    res.redirect('/admin/main-catagory');
})
route.post('/update-maincat-img/:id',async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv("public/images/"+req.body.image);
    let d=await maincat.findById(req.params.id).updateOne({"image":req.body.image});
    if(d.length!=0){
        res.redirect('/admin/main-catagory');
    }
})
route.get("/show-subcats/:id",checkAdmin,async(req,res)=>{
    let d=await maincat.findById(req.params.id);
    let sub=[];
    for(let i of d.categories){
        let data=await cata_model.findById(i);
        sub.push(data);
    }
  let subcat=await cata_model.find();
    let obj={
        "mcat":d,
        "sub":sub,
        'cat':subcat
        }
    if(d.length!=0){
        res.render('admin/showmaincat.ejs',obj);
    }
})
route.post("/update-sub-cat/:mid/:ind",async(req,res)=>{
    let ca=`categories.${req.params.ind}`
  let d=await maincat.findById(req.params.mid).updateOne({[ca]:req.body.categories});
  if(d.length!=0){
      res.redirect("/admin/show-subcats/"+req.params.mid);
  }

})
route.get("/certificate",checkAdmin,async(req,res)=>{
    let d=await certi.find();
    let obj={
        "certi":d
    }
    res.render("admin/certificate.ejs",obj);
})
route.post("/save-certi",async(req,res)=>{
req.body.image=new Date().getTime()+req.files.img.name;
req.files.img.mv("public/images/"+req.body.image);
req.body.visible=false;
let d=await certi(req.body).save();
if(d.length!=0){
    res.redirect('/admin/certificate');
}
})
route.post("/update-certificate/:id",async(req,res)=>{
    let d=await certi.findById(req.params.id).updateOne(req.body);
    if(d.length!=0){
        res.redirect('/admin/certificate');
    }
})
route.get("/delete-certi/:id",checkAdmin,async(req,res)=>{
    let d=await certi.findById(req.params.id).deleteOne();
    res.redirect('/admin/certificate');
})
route.get("/slider",checkAdmin,async(req,res)=>{
    let d=await slider.find();
    let obj={
        "slider":d
    }
    res.render("admin/slider.ejs",obj);
})
route.post("/add-slider",async(req,res)=>{
    req.body.image=new Date().getTime()+req.files.img.name;
    req.files.img.mv("public/images/"+req.body.image);
    let d=await slider(req.body).save();
    if(d.length!=0){
        res.redirect("/admin/slider");
    }
})
route.get("/delete-slider/:id",checkAdmin,async(req,res)=>{
    let d=await slider.findById(req.params.id).deleteOne();
    res.redirect("/admin/slider");
})
route.post("/update-slider/:id",async(req,res)=>{
    let d=await slider.findById(req.params.id).updateOne(req.body);
    res.redirect("/admin/slider");
})
route.get("/history",checkAdmin,async(req,res)=>{
    let d=await his.find();
    let obj={
        "data":d[0]
    }

    res.render("admin/history.ejs",obj);
})
route.post("/save-history/:id",async(req,res)=>{
  let d=await his.findById(req.params.id).updateOne(req.body);
  res.redirect("/admin/history");

})
route.get("/delete-img/:id",async(req,res)=>{
    let d=await photo.findById(req.params.id).deleteOne();
res.redirect('/admin/photos')
})
let blogcat=require("../model/blogcat");
route.get("/blog-cat",checkAdmin,async(req,res)=>{
    let d=await blogcat.find();
    let obj={
        "cats":d
    }
res.render("admin/BlogCat.ejs",obj);
})

route.post("/add-blog-cat",async(req,res)=>{
    req.body.blog_count=0;
let d=await blogcat(req.body).save();
res.redirect("/admin/blog-cat");
})
route.post("/update-blog-cat/:id",async(req,res)=>{
    let d=await blogcat.findById(req.params.id).updateOne(req.body);
    res.redirect("/admin/blog-cat");
})
route.get("/delete-blog-cat/:id",checkAdmin,async(req,res)=>{
    let d=await blogcat.findById(req.params.id).deleteOne();
    res.redirect("/admin/blog-cat");
})
module.exports=route;