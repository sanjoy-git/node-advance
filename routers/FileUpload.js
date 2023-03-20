const express = require("express");
const router = express.Router();
const formidable=require('formidable');
const fs = require('fs');

router.get("/on", (req, res) => {
  res.send(`
  <form action="/upload" enctype="multipart/form-data" method="post">
    <div>Text field title: <input type="text" name="title" /></div>
    <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
    <input type="submit" value="Upload" />
  </form>
`);
});

router.post('/upload', (req, res, next) => {
  // console.log(req)
  // res.send(req)
  const form = formidable({multiples:true});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    else{
      const fName=__dirname + "/../documents/" + files.someExpressFiles.originalFilename;
      console.log(fields)
      fs.copyFile(files.someExpressFiles.filepath,fName,err=>{
        if(err){
          console.log(err)
        }
        else{
          res.send("upload success")
        }
      })
      // res.json({ fields, files });
    }
  });
});

module.exports=router;