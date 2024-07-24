import axios from "axios";

export const allfolder = async () => {
    try {
        const response = await axios.get(
            "http://localhost:4000/api/folder/allfolder");
        return response;
    }
    catch (error) {
        return error;
    }
};

export const createfolder = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/folder/createfolder", data);
        return response;
    }
    catch (error) {
        return error;
    }
};

export const deletefolder = async (id, data) => {
    try {
        const response = await axios.delete(
            "http://localhost:4000/api/folder/deletefolder/" + id, data);
        return response;
    }
    catch (error) {
        return error;
    }

};
