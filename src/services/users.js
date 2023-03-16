import api from "./railsApi"

export const getAllUsers = async () => {
    try {
        const resp = await api.get("/users");
        return resp.data
    } catch(error) {
        throw error;        
    }
};

export const getOneUser = async (id) => {
    try {
        const resp = await api.get(`/members/${id}`);
        return resp.data
    } catch(error) {
        throw error;
    }
};

export const putUser = async (id, userData) => {
    try {
        const resp = await api.put(`/members/${id}`, {user: userData});
        return resp.data
    } catch(error) {
        throw error;
    }
};

export const destroyUser = async (id) => {
    try {
        const resp = await api.delete(`/members/${id}`);
        return resp.data
    } catch(error) {
        throw error;
    }
};