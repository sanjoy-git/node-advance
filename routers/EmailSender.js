const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/email",(req,res,next)=>{
  const {email,subject}=req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testmail30003@gmail.com',
      pass: 'caoucnmopntlcnut'
    }
  });

  var mailOptions = {
    from: 'testmail30003@gmail.com',
    to: email,
    subject: 'Sending email',
    html: `<h3>${subject}</h3>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: Success');
      res.status(200).json({
        message:"email send success"
      })
    }
  });
})


module.exports=router;