const express = require("express");
const router = express.Router();
const BkashGateway = require('bkash-payment-gateway')

router.get("/bkash", (req, res) => {
	res.send('Hi')
});


module.exports = router;