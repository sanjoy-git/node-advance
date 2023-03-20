const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
// const EmailSender=require("./routers/EmailSender");
// const WebMailSender=require("./routers/WebMailSender");
// const ML=require("./routers/ML");
// const Bkash = require("./routers/Bkash");
// const SMS = require("./routers/SMS");
// const ExelFile = require("./routers/ExelFile");
const FileUpload = require("./routers/FileUpload");


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('documents'))
// app.use(EmailSender);
// app.use(WebMailSender);
// app.use(ML);
// app.use(SMS);
// app.use(Bkash);
// app.use(ExelFile)
app.use(FileUpload);



app.get("/",(req,res,next)=>{
  res.send("server is running");
})

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);