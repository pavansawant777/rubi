let express=require('express');
let app=express();
let cors=require('cors');
app.use(cors());
app.use(express.json());
let upload=require('express-fileupload');
let bodyparser=require('body-parser');
let mongoose=require('mongoose');
let api=require('./routes/api');
let path=require('path');
app.use(express.static("public/"));
let session=require('express-session');
app.use(session({
    resave:true,
    secret:'pratik',
    saveUninitialized:true
}))
app.use(upload());
app.use(bodyparser.urlencoded({extended:true}));
let admin=require("./routes/admin");
app.use("/admin",admin);
app.use('/api',api);
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.listen(1001);
