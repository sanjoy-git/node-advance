const express = require("express");
const router = express.Router();
const fs = require('fs');
const reader = require('xlsx');


router.get("/read", (req, res) => {
  try {
    const file=reader.readFile('documents/document.xlsx');

    // let data=[]
    // for (const property in file.Props) {
    //   data.push(file.Props[property]);
    // }
    res.send(file);

  } catch (error) {
    res.send(error)
  }
});

module.exports=router;
