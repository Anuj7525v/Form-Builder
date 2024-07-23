const express = require("express");
const router = express.Router();
const updateAuth =require("../controllers/udateAuth");

router.get('/',(req,res) => {
  res.send("UpdateAuth Ready..");
});

router.patch('/update',updateAuth);

module.exports = router;