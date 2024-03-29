import api from "./railsApi"

export const loginUser = async (loginData) => {
    try {
        const resp = await api?.post("/auth/login", { authentication: loginData })
        localStorage.setItem("authToken", resp?.data?.token)
        api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
        return resp?.data?.user;
    } catch(error) {
        return error;
    }
}

export const registerUser = async (registerData) => {
    try {
        const resp = await api.post("/members", { authentication: registerData })
        localStorage.setItem("authToken", resp?.data?.token)
        api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
    } catch(error) {
        return error;
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem("authToken")
    if(token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        try {
            // verify method rails-api
            const resp = await api.get("auth/verify");
            return resp.data;
        } catch(error) {
            // return error
            let path = window.location.origin + "/login";
            if (window.location.origin + "/login" !== path){
                window.location.href = window.location.origin + "/login"; 
            }
        }
    }
    return null;
};

export const removeToken = () => {
    api.defaults.headers.common.authorization = null;
} 