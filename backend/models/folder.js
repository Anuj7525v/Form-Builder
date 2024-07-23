const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema ({
    foldername:{
        type:String,
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Folder",folderSchema);

