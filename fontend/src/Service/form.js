import axios from "axios";

export const Createform = async (data) => {
    try {
        const response = await axios.post(
            'http://localhost:4000/api/form/createform', data)
        return response;
    }
    catch (error) {
        return error;
    }
};

export const Allform = async () => {
    try {
        const response = await axios.get(
            'http://localhost:4000/api/form/allform')
        return response;
    }
    catch (error) {
        return error;
    }
};

export const Deleteform = async (id,data) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/api/form/deleteform/${id}`,data)
        return response;
    }
    catch (error) {
        return error;
    }
};

