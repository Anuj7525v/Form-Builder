const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
env.config();
const app = express();
const mongoose = require("mongoose");
const AuthRouter = require("./routes/Auth");
const UpdateAuth = require("./routes/updateAuth");
const allSetting = require("./routes/updateAuth");
const FolderRouter = require("./routes/folder.js");
const FormRouter = require("./routes/form.js");

app.use(cors({origin:"http://localhost:3000"}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/auth",AuthRouter);
app.use("/api/updateauth",UpdateAuth);
app.use("/api/updatesetting",allSetting)
app.use("/api/folder",FolderRouter);
app.use("/api/form",FormRouter);




app.get("/", (req,res) => {
    res.send("Hello Creator");
});

app.listen(process.env.port ,() => {
    mongoose.connect(process.env.MongoDB)
    .then(()=>{
        console.log("Server is running on port "+ process.env.port);
    })
    .catch((error) => {
        console.log("error");
    })
   
});