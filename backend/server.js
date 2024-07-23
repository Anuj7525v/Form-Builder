const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
env.config();
const app = express();
const port =  4000;
const mongoose = require("mongoose");
const AuthRouter = require("./routes/Auth");
const UpdateAuth = require("./routes/updateAuth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/auth",AuthRouter);
app.use("/api/updateAuth",UpdateAuth);




app.get("/", (req,res) => {
    res.send("Hello Creator");
});

app.listen(port,() => {
    mongoose.connect("mongodb+srv://Form_Builder:form1212@cluster0.vqlwp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Server is running on port "+ port);
    })
    .catch((error) => {
        console.log("error");
    })
   
});