const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema ({
    formname:{
        type:String,
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Form",formSchema);

