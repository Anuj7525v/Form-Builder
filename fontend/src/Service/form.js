import axios from "axios";
import {BACKEND_URL} from "../constant";


export const Createform = async (data) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/form/createform`, data)
        return response;
    }
    catch (error) {
        return error;
    }
};
NP
export const Allform = async () => {
    try {
        const response = await axios.get(
            `${BACKEND_URL}/api/form/allform`)
        return response;
    }
    catch (error) {
        return error;
    }
};

export const Deleteform = async (id,data) => {
    try {
        const response = await axios.delete(
            `${BACKEND_URL}/api/form/deleteform/${id}`,data)
        return response;
    }
    catch (error) {
        return error;
    }
};

