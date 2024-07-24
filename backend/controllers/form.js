const express = require("express");
const Form = require("../models/form");


const Allform = async (req,res,next) => {
    try{
        const form = await Form.find();
        res.status(200).json(form);

    }
    catch(error){
        next(error)
    }
};

const Createform = async (req,res,next) => {
    try{
        const { formname } = req.body;
        if (!formname) {
            return res.status(400).send("Please enter a form ");
        }
        const newform = new form({ formname });
        await newform.save();
        res.status(200).send("Create successfully");

    }
    catch(error){
        next(error)
    }
};

const Deleteform = async (req,res,next) => {
    try{
        const { id } = req.params;
        const form = await Form.findByIdAndDelete(id);
        res.status(200).send("Delete successfully");
        }
        catch(error){
            next(error)
            }

};

module.exports = {Allform,Createform ,Deleteform};
