const express = require("express");
const brain=require("brain.js");
const router = express.Router();
const data=require("../data.json");


router.get("/brain", (req, res) => {

  const net=new brain.NeuralNetwork();
  net.train([
    { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
    { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } },
  ]);
  

  const output=net.run({ r: 0.03, g: 0.7, b: 0.5})

  res.status(200).json({
    message:"Brain route is on",
    result:output
  })
});



router.get("/brain1", (req, res) => {
  const net=new brain.recurrent.LSTM();

  const trainData=data.map(item=>({
    input:item.text,
    output:item.category
  }))

  net.train(trainData,{
    iterations:100
  })

  const output=net.run('memor')

  res.status(200).json({
    message:"Brain route is on",
    result:trainData,
    train:output,
  })
});





module.exports = router;