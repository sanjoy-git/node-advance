const express = require("express");
const router = express.Router();

const springedge=require('springedge');


router.get("/sms", (req, res) => {

  let params = {
    'apikey':'',
    'sender':'me',
    'to':[
      '01912345678'
    ],
    'message':'test sms'
  }

  springedge.messages.send(params,5000,function(err,response){
    if(err){
      res.status(500).json({
        error:err
      })
    }
    else{
      res.status(200).json({
        messages:response
      })
    }

  })

});


module.exports=router;