const express = require("express");
const router = express.Router();
const {Login,Signup} =require("../controllers/Auth");

router.get('/',(req,res) => {
  res.send("Auth Router Ready..");
});

router.post('/signup',Signup);
router.post('/login',Login);

module.exports = router;