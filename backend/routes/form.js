const express = require("express");
const router = express.Router();
const {Allform,Createform,Deleteform} = require("../controllers/form");

router.get("/",(req,res) => {
    res.send("Form Router.")
});

router.get("/allform",Allform);
router.post("/createform",Createform);
router.delete("/deleteform",Deleteform);

module.exports = router;