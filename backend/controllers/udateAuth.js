const express = require("express");
const bcrypt = require("bcryptjs");
const Auth = require("../models/Auth");

const updateAuth = async (req, res, next) => {
    try {
        const { username, email, password, newPassword } = req.body;
        if (!username || !email || password || !newPassword) {
            res.status(400).send("Please fill all the details");
        }
        const auth = await Auth.findById(req.authId);
        if (!auth) {
            res.status(400).send("Auth not found");
        }
        if(email){
            auth.email = email;
         }

        const isOldPassword = await bcrypt.compare(password,auth.password);
        if (!isOldPassword) {
            res.status(400).send("Old password is incorrect");
        }
        if(password !== newPassword){
            return res.status(400).send("Password does not match");
        }
        const hashPassword = await bcrypt.hash(newPassword,10);
        auth.password = hashPassword;
        await auth.save();
        res.status(200).send("Password update successfully");
     
     
     
     await auth.save();
     res.status(200).send("Auth Updated Successfully");
    }
    catch(error){
        next(error)
    }
};

module.exports = updateAuth;
