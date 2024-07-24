const express = require("express");
const router = express.Router();
const {Allfolder,Createfolder,Deletefolder} = require("../controllers/folder");

router.get('/',(req,res) => {
    res.send("Folder Router Ready..");
  });


router.get("/allfolder",Allfolder);
router.post("/createfolder",Createfolder);
router.delete("/deletefolder/:id",Deletefolder);

module.exports = router;