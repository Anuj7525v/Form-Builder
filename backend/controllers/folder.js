const express = require("express");
const Folder = require("../models/folder");
const folder = require("../models/folder");


const Allfolder = async (req, res, next) => {
    try {
        const folders = await Folder.find();
        res.status(200).json(folders);
    }
    catch (error) {
        next(error)
    }

};

const Createfolder = async (req, res, next) => {
    try {
        const { foldername } = req.body;
        if (!foldername) {
            return res.status(400).send("Please enter a folder ");
        }
        const newfolder = new folder({ foldername });
        await newfolder.save();
        res.status(200).send("Create successfully");
    }
    catch (error) {
        next(error)
    }

};

const Deletefolder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const folder = await Folder.findByIdAndDelete(id);
        res.status(200).send("Delete successfully");
    }
    catch (error) {
        next(error)
    }

};

module.exports = {Createfolder,Allfolder,Deletefolder};