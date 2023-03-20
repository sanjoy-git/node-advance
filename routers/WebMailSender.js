const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const smtpTransport = require("nodemailer-smtp-transport")

router.post("/webmail",async(req,res,next)=>{
  const {email,subject}=req.body;


  // res.status(200).json({
  //   email:email,
  //   subject:subject
  // })

  // let testAccount = await nodemailer.createTestAccount();



  let transporter =await nodemailer.createTransport(smtpTransport({
    pool: true,
    host: "mail.predictuse.com",
    port: 465,
    secure: true,
    auth: {
      user: 'support@predictuse.com',
      pass: 'MLBXdLce5v}h'
    },
    tls: {
      rejectUnauthorized: false,
    },
  }));

  let mailOptions = {
    from: 'predictuse.support@predictuse.com',
    to: email,
    // to: 'testmail30003@gmail.com',
    subject: subject,
    text: "My name is omuk"
  };

  transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
      res.status(500).json({
        error:error
      })
    } else {
      res.status(200).json({
        message:"email send successs",
        info:info.messageId
      })
    }
  });



  // transporter.verify(function (error, success) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages");
  //   }
  //   if(success){
  //     console.log("success")
  //   }
  // });

})


module.exports=router;