const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
        user: "pratikchindhe44@gmail.com",
        pass: "ruxr iyuu gywc mkfc",
    },
});




// async..await is not allowed in global scope, must use a wrapper
async function main(receiver,subject,content) {
  // send mail with defined transport object
  
  const info = await transporter.sendMail({
    from: 'javacoder44@gmail.com', // sender address
    to: receiver, // list of receivers
    subject: subject, // Subject line
    text: content, // plain text body
   
  });

}


module.exports=main;