const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/Auth");



const Signup = async (req, res, next) => {
   try{
    const {username,email,password,confirmPassword} = req.body;
    if(!username || !email || !password || !confirmPassword){
        return res.status(400).send("Please fill all the fields...");
   }
   const isUserExist = await Auth.findOne({email});
   if(isUserExist){
    return res.status(400).send("User Already Exist.");
   }
   if(password !== confirmPassword){
    return res.status(400).send("Password and Confirm Password does not match");
   }
   const hashPassword = ((await bcrypt.hash(password,10)) && (await bcrypt.hash(confirmPassword,10)));
   const newAuth = new Auth({
    username,email,password:hashPassword
   });
   await newAuth.save();
   res.status(200).send("User registered successfully");
}
    catch (error) {
        next(error)
    }
}; 

const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).send("Fill all the fields");
        }
        const auth = await Auth.findOne({email});
        if(!auth){
            return res.status(400).send("Invalid email or password");

        }
        const isPasswordValid = await bcrypt.compare(password,auth.password);
        if(!isPasswordValid){
            return res.status(400).send("Invalid email or password");
    }
    const token = jwt.sign({authId:auth._id},process.env.Secret_key,{expiresIn:"240h",});

    res.status(200).json({
        token,
        authId:auth._id,
        username:auth.username,
        email:auth.email,
    })
}
    catch (error) {
        next(error)
    }
};





module.exports = {Signup,Login};