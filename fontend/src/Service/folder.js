import axios from "axios";
import {BACKEND_URL} from "../constant";


export const allfolder = async () => {
    try {
        const response = await axios.get(
          `${BACKEND_URL}/api/folder/allfolder`);
        return response;
    }
    catch (error) {
        return error;
    }
};

export const createfolder = async (data) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/folder/createfolder`, data);
        return response;
    }
    catch (error) {
        return error;
    }
};

export const deletefolder = async (id, data) => {
    try {
        const response = await axios.delete(
            `${BACKEND_URL}/api/folder/deletefolder/` + id, data);
        return response;
    }
    catch (error) {
        return error;
    }

};
