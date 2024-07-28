const express = require("express");
const router = express.Router();
const {updateAuth,allSetting} =require("../controllers/udateAuth");

router.get('/',(req,res) => {
  res.send("UpdateAuth Ready..");
});

router.patch('/update',updateAuth);
router.get('/all',allSetting)

module.exports = router;