import api from "./railsApi"

export const loginUser = async (loginData) => {
    try {
        const resp = await api?.post("/sign_in", { authentication: loginData })
        localStorage.setItem("authToken", resp?.data?.token)
        api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
        return resp?.data?.user;
    } catch(error) {
        return error;
    }
}

export const registerUser = async (registerData) => {
    try {
        const resp = await api.post("/signup", { authentication: registerData })
        localStorage.setItem("authToken", resp?.data?.token)
        api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
    } catch(error) {
        return error;
    }
}

